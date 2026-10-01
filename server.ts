import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  // JSON body parser with support for base64 images
  app.use(express.json({ limit: '20mb' }));

  // API endpoint to save user's real uploaded photo to public/zay_gyi_profile.jpg
  app.post('/api/upload-avatar', (req, res) => {
    try {
      const { imageBase64 } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ error: 'No image provided' });
      }

      // Strip data:image/...;base64, prefix
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');

      const publicDir = path.join(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const publicFile = path.join(publicDir, 'zay_gyi_profile.jpg');
      fs.writeFileSync(publicFile, buffer);

      // Also update dist directory if built
      const distDir = path.join(__dirname, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'zay_gyi_profile.jpg'), buffer);
      }

      console.log('Successfully saved real photo to public/zay_gyi_profile.jpg');
      return res.json({ success: true, url: `/zay_gyi_profile.jpg?t=${Date.now()}` });
    } catch (err) {
      console.error('Failed to save uploaded photo:', err);
      return res.status(500).json({ error: 'Failed to save photo' });
    }
  });

  // Serve static public folder for instant asset access
  app.use(express.static(path.join(__dirname, 'public')));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // Mount Vite middleware in development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
