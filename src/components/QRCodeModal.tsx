import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { X, Copy, Check, Download, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandTitle: string;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, brandTitle }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (isOpen && canvasRef.current && currentUrl) {
      QRCode.toCanvas(
        canvasRef.current,
        currentUrl,
        {
          width: 240,
          margin: 2,
          color: {
            dark: '#030712',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('QR code generation error', error);
        }
      );
    }
  }, [isOpen, currentUrl]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadQR = () => {
    if (canvasRef.current) {
      const url = canvasRef.current.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = `mobile-service-qr.png`;
      a.click();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div 
            className="relative w-full max-w-sm rounded-3xl glass-panel p-6 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 text-center"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="ပိတ်ရန်"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Header */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <QrCode className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                QR Code မျှဝေရန်
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-5 myanmar-text">
              {brandTitle} သို့ အခြားသူများ တိုက်ရိုက်ဝင်ရောက်နိုင်ရန် QR Code ကို Scan ဖတ်ခိုင်းပါ
            </p>

            {/* QR Code Canvas Frame */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-block p-3 rounded-2xl bg-white shadow-xl shadow-cyan-950/50 mb-5 border-2 border-cyan-400/20"
            >
              <canvas ref={canvasRef} className="block rounded-lg mx-auto" />
            </motion.div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="myanmar-text">{copied ? 'Link ကူးပြီး' : 'Link ကူးရန်'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDownloadQR}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/40 text-cyan-200 border border-cyan-500/30 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-300" />
                <span className="myanmar-text">ပုံသိမ်းရန်</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
