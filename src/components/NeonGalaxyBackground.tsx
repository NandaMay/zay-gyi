import React, { memo } from 'react';

// Pre-defined static star positions to prevent re-renders or runtime calculations
const STARS = [
  { top: '8%', left: '12%', size: 2, cls: 'anim-twinkle-fast bg-cyan-200' },
  { top: '15%', left: '78%', size: 1.5, cls: 'anim-twinkle-med bg-white' },
  { top: '22%', left: '34%', size: 2.5, cls: 'anim-twinkle-slow bg-purple-200' },
  { top: '28%', left: '88%', size: 1, cls: 'anim-twinkle-fast bg-sky-200' },
  { top: '35%', left: '18%', size: 2, cls: 'anim-twinkle-slow bg-white' },
  { top: '42%', left: '65%', size: 1.5, cls: 'anim-twinkle-med bg-cyan-100' },
  { top: '48%', left: '92%', size: 2, cls: 'anim-twinkle-fast bg-fuchsia-200' },
  { top: '55%', left: '8%', size: 1.5, cls: 'anim-twinkle-slow bg-white' },
  { top: '62%', left: '45%', size: 2, cls: 'anim-twinkle-fast bg-sky-300' },
  { top: '68%', left: '82%', size: 2.5, cls: 'anim-twinkle-med bg-purple-100' },
  { top: '75%', left: '25%', size: 1, cls: 'anim-twinkle-slow bg-white' },
  { top: '82%', left: '72%', size: 2, cls: 'anim-twinkle-fast bg-cyan-300' },
  { top: '88%', left: '15%', size: 1.5, cls: 'anim-twinkle-med bg-white' },
  { top: '92%', left: '58%', size: 2, cls: 'anim-twinkle-slow bg-indigo-200' },
  { top: '12%', left: '50%', size: 1, cls: 'anim-twinkle-med bg-white' },
  { top: '38%', left: '4%', size: 2, cls: 'anim-twinkle-fast bg-cyan-200' },
  { top: '64%', left: '95%', size: 1.5, cls: 'anim-twinkle-slow bg-purple-200' },
  { top: '18%', left: '94%', size: 2, cls: 'anim-twinkle-med bg-white' },
  { top: '78%', left: '42%', size: 1.5, cls: 'anim-twinkle-fast bg-sky-200' },
  { top: '52%', left: '52%', size: 1, cls: 'anim-twinkle-slow bg-white' },
];

export const NeonGalaxyBackground: React.FC = memo(() => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 bg-[#020208] transform-gpu">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATIC GPU NEBULA GLOWS (Zero JS CPU Lag)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      
      {/* Top Core Nebula (Cyan / Sapphire) */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[500px] rounded-full bg-gradient-to-b from-cyan-600/25 via-blue-600/20 to-transparent blur-[110px] transform-gpu pointer-events-none" 
      />

      {/* Center-Right Nebula (Cosmic Violet / Fuchsia) */}
      <div 
        className="absolute top-[20%] -right-28 w-[420px] h-[450px] rounded-full bg-gradient-to-l from-purple-600/20 via-fuchsia-600/15 to-transparent blur-[110px] transform-gpu pointer-events-none" 
      />

      {/* Center-Left Nebula (Teal / Indigo) */}
      <div 
        className="absolute top-[48%] -left-28 w-[420px] h-[450px] rounded-full bg-gradient-to-r from-violet-600/18 via-indigo-600/15 to-transparent blur-[110px] transform-gpu pointer-events-none" 
      />

      {/* Bottom Subtle Nebula */}
      <div 
        className="absolute -bottom-28 left-1/3 w-[450px] h-[400px] rounded-full bg-gradient-to-t from-indigo-700/20 to-transparent blur-[120px] transform-gpu pointer-events-none" 
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TWINKLING STARFIELD (Pure CSS Hardware Accelerated)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0">
        {STARS.map((star, idx) => (
          <div
            key={idx}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            className={`absolute rounded-full ${star.cls} shadow-[0_0_6px_rgba(255,255,255,0.7)]`}
          />
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SHOOTING STAR (Pure CSS GPU Meteor)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute top-[10%] left-[8%] w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-300 to-white rotate-[35deg] anim-meteor blur-[0.3px]" />

      {/* Subtle Star Dust Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(rgba(147, 197, 253, 0.45) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
});

NeonGalaxyBackground.displayName = 'NeonGalaxyBackground';
