/**
 * Mobile Service & Second-Hand
 * Zay Gyi • Ultra-Smooth Neon Galaxy Digital Business Profile
 * Stationary Layout (အောက်ကနေအပေါ်မတက်ဘဲ သဘာဝအတိုင်း တည်ငြိမ်စွာ တည်ရှိသည်)
 * Touch/Hover 10px Elevation with Sleek Light Accent Bar (အရမ်းဖြူဖွေးမနေဘဲ သေသပ်သော Light Accent Bar သာ လင်းလက်သည်)
 * Direct "ခေါ်ဆိုမည်" Phone Calling
 */

import React, { useState } from 'react';
import { 
  Smartphone, 
  Wrench, 
  Cpu, 
  PhoneCall, 
  ExternalLink, 
  QrCode, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Clock, 
  UserCheck
} from 'lucide-react';
import { businessConfig, BusinessService } from './config/businessConfig';
import { QRCodeModal } from './components/QRCodeModal';
import { ContactModal } from './components/ContactModal';
import { NeonGalaxyBackground } from './components/NeonGalaxyBackground';

export default function App() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  
  // Permanent profile image from public directory
  const avatarSrc = businessConfig.profileImage;

  // Helper to pick matching icon
  const renderServiceIcon = (service: BusinessService, isActive: boolean) => {
    switch (service.id) {
      case 'buy-sell-exchange':
        return (
          <Smartphone 
            className={`w-6 h-6 transition-colors ${
              isActive ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'text-cyan-400'
            }`} 
          />
        );
      case 'mobile-service':
        return (
          <Wrench 
            className={`w-6 h-6 transition-colors ${
              isActive ? 'text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]' : 'text-sky-400'
            }`} 
          />
        );
      case 'motherboard':
        return (
          <Cpu 
            className={`w-6 h-6 transition-colors ${
              isActive ? 'text-indigo-300 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]' : 'text-indigo-400'
            }`} 
          />
        );
      default:
        return <span className="text-2xl">{service.icon}</span>;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020208] text-slate-100 flex flex-col items-center justify-between overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ULTRA-FAST GPU NEON GALAXY BACKGROUND
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <NeonGalaxyBackground />

      {/* Main Container - Clean Steady Layout (No sliding up from bottom) */}
      <main className="relative z-10 w-full max-w-md md:max-w-xl lg:max-w-2xl px-4 py-6 sm:py-8 flex flex-col items-center">
        
        {/* Top Utility Bar */}
        <div className="w-full flex items-center justify-between mb-5 px-1">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[12px] font-medium tracking-wide text-cyan-200/90 myanmar-text">
              ✨ Zay Gyi Service မှ နွေးထွေးစွာ ကြိုဆိုပါသည်
            </span>
          </div>

          <button
            onClick={() => setIsQrModalOpen(true)}
            className="flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white/[0.06] hover:bg-cyan-500/15 active:scale-95 border border-cyan-500/25 hover:border-cyan-400/60 text-xs text-cyan-300 hover:text-cyan-200 transition-all shadow-sm cursor-pointer backdrop-blur-md"
            title="QR Code မျှဝေရန်"
          >
            <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            <span className="myanmar-text text-[11px] font-medium">QR Code</span>
          </button>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            BRAND HEADER (Zay Gyi in First Line)
            Line 1: Zay Gyi
            Line 2: 📱 Mobile Service & Second-Hand
            Line 3: ဖုန်းအရောင်းအဝယ် • အလဲအထပ် • Service • ဖုန်းဘုတ်ပြား
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <header className="w-full text-center flex flex-col items-center mb-6">
          {/* Circular Profile Avatar with GPU Halo */}
          <div className="relative mb-3.5 cursor-pointer group">
            {/* GPU-Accelerated Galaxy Nebula Halo */}
            <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 blur-lg anim-galaxy-halo pointer-events-none opacity-75" />

            {/* Profile Avatar Frame */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-2xl shadow-cyan-950/80 transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-slate-950 relative flex items-center justify-center">
                <img
                  src={avatarSrc}
                  alt="Zay Gyi Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "/src/assets/images/zay_gyi_real_photo.jpg";
                  }}
                />
              </div>

              {/* Verified Online Active Indicator */}
              <div 
                className="absolute bottom-1 right-1 p-1 rounded-full bg-[#020208] border-2 border-cyan-400 shadow-md"
                title="Active"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* First Line: Zay Gyi */}
          <div className="text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-fuchsia-200 drop-shadow-[0_0_16px_rgba(6,182,212,0.4)] mb-1">
            Zay Gyi
          </div>

          {/* Second Line: 📱 Mobile Service & Second-Hand */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            <span className="inline-block mr-1.5">📱</span>
            <span>{businessConfig.brandTitle}</span>
          </h1>

          {/* Third Line: Subtitle in Burmese */}
          <p className="text-sm sm:text-base font-medium text-cyan-200/90 tracking-wide myanmar-text max-w-sm sm:max-w-md mx-auto">
            {businessConfig.tagline}
          </p>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-3.5 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.7)]" />
        </header>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ACTION BUTTON 1: FACEBOOK PROFILE
            👤 Facebook Profile (12px Elevation with Light Accent Bar)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="w-full mb-5">
          <a
            href={businessConfig.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            onPointerDown={() => setActiveCardId(prev => prev === 'fb-card' ? null : 'fb-card')}
            className={`group relative w-full min-h-[66px] py-3.5 px-5 rounded-2xl glass-panel flex items-center justify-between border card-elevate-interactive cursor-pointer overflow-hidden backdrop-blur-md ${
              activeCardId === 'fb-card'
                ? 'card-accent-active border-cyan-400/80 shadow-lg shadow-cyan-950/40'
                : 'border-cyan-500/25 hover:border-cyan-400/60 bg-slate-950/60 shadow-md shadow-black/30'
            }`}
            title="Facebook Profile သို့ သွားရောက်ရန်"
          >
            {/* Sleek Light Accent Bar at Top */}
            <div 
              className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-75 pointer-events-none rounded-full ${
                activeCardId === 'fb-card' ? 'opacity-100 shadow-[0_0_12px_rgba(6,182,212,0.9)]' : 'opacity-0 group-hover:opacity-100'
              }`} 
            />

            <div className="flex items-center gap-3.5">
              {/* Facebook Profile Picture Thumbnail */}
              <div className="relative w-12 h-12 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-md shrink-0">
                <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-950 flex items-center justify-center">
                  <img
                    src={avatarSrc}
                    alt="Facebook Profile Avatar"
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "/src/assets/images/zay_gyi_real_photo.jpg";
                    }}
                  />
                </div>
                {/* Facebook miniature badge */}
                <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-[#1877F2] border-2 border-[#020208] flex items-center justify-center text-white text-[10px] font-black shadow">
                  f
                </div>
              </div>

              <div className="text-left">
                <div className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-cyan-200 transition-colors flex items-center gap-2">
                  <span>{businessConfig.facebook.buttonLabel}</span>
                  <span className="text-[10px] py-0.5 px-2 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30 flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-blue-300" />
                    Verified
                  </span>
                </div>
                <div className="text-xs text-slate-300/85 myanmar-text group-hover:text-slate-200">
                  Facebook Page / Profile သို့ တိုက်ရိုက်သွားရန် နှိပ်ပါ
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-cyan-400 group-hover:text-cyan-300 shrink-0 pl-2">
              <ExternalLink className="w-5 h-5 text-cyan-400" />
            </div>
          </a>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            3 MAIN BUSINESS SERVICES
            Card area ကို ထိတာနဲ့ 10px ကြွတက် + Sleek Light Accent Bar
            (အောက်ကနေ အပေါ်မတက်ဘဲ ပုံမှန်အတိုင်း အဆင်ပြေစွာ တည်ရှိသည်)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="w-full mb-5">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-cyan-400/90 flex items-center gap-1.5 myanmar-text">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>အဓိက ဝန်ဆောင်မှုများ</span>
            </h2>
            <span className="text-[11px] text-cyan-300/90 myanmar-text">
              ကဒ်ကိုထိပါက ၁၂px ကြွတက်ပါမည်
            </span>
          </div>

          <div className="space-y-3.5 w-full">
            {businessConfig.services.map((service, index) => {
              const isActive = activeCardId === service.id;
              return (
                <div
                  key={service.id}
                  onPointerDown={() => setActiveCardId(prev => prev === service.id ? null : service.id)}
                  className={`group relative w-full rounded-2xl glass-panel p-4.5 sm:p-5 card-elevate-interactive cursor-pointer overflow-hidden backdrop-blur-xl ${
                    isActive
                      ? 'card-accent-active border-cyan-400/70 shadow-lg shadow-cyan-950/40'
                      : 'border-white/10 hover:border-cyan-400/50 bg-slate-950/65 shadow-md shadow-black/30'
                  }`}
                  title="အသေးစိတ်ကြည့်ရန် ကဒ်ကို ထိပါ"
                >
                  {/* Sleek Cyan Light Accent Bar on Top (အရမ်းဖြူမနေဘဲ သေသပ်သော Light Accent Bar) */}
                  <div 
                    className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-75 pointer-events-none rounded-full ${
                      isActive ? 'opacity-100 shadow-[0_0_12px_rgba(6,182,212,0.9)]' : 'opacity-0 group-hover:opacity-100'
                    }`} 
                  />

                  <div className="flex items-start gap-3.5">
                    {/* Service Icon Badge */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                        : 'bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/[0.1]'
                    }`}>
                      {renderServiceIcon(service, isActive)}
                    </div>

                    {/* Service Details */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-base sm:text-lg font-bold tracking-normal transition-colors myanmar-text ${
                          isActive ? 'text-cyan-200' : 'text-white group-hover:text-cyan-200'
                        }`}>
                          <span className="text-cyan-400 mr-1.5 text-sm font-semibold">{index + 1}။</span>
                          {service.title}
                        </h3>

                        {/* Subtle Active indicator */}
                        {isActive && (
                          <span className="text-[10px] py-0.5 px-2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-400/40 flex items-center gap-1 shrink-0 ml-2">
                            <Sparkles className="w-2.5 h-2.5 text-cyan-300" />
                            <span>Active</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed myanmar-text mb-2.5 group-hover:text-slate-200 transition-colors">
                        {service.shortDesc}
                      </p>

                      {/* Highlights */}
                      {service.highlights && service.highlights.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium myanmar-text">
                          {service.highlights.map((hl, hlIdx) => (
                            <React.Fragment key={hl}>
                              <span className={`inline-flex items-center gap-1 py-0.5 ${
                                isActive ? 'text-cyan-200 font-semibold' : 'text-cyan-300'
                              }`}>
                                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                                {hl}
                              </span>
                              {hlIdx < service.highlights!.length - 1 && (
                                <span className="text-slate-600" aria-hidden="true">•</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ACTION BUTTON 2: DIRECT PHONE CALL (ခေါ်ဆိုမည်)
            📞 နှိပ်တာနဲ့ ဖုန်းတန်းခေါ်နိုင်သော စနစ်
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="w-full mb-7">
          <div 
            onPointerDown={() => setActiveCardId(prev => prev === 'call-card' ? null : 'call-card')}
            className={`rounded-2xl glass-panel p-4.5 sm:p-5 border card-elevate-interactive backdrop-blur-md relative overflow-hidden ${
              activeCardId === 'call-card'
                ? 'card-accent-active border-cyan-400/80 shadow-lg shadow-cyan-950/40'
                : 'border-cyan-400/35 bg-slate-950/60 shadow-xl shadow-cyan-950/40 hover:border-cyan-400/60'
            }`}
          >
            {/* Sleek Light Accent Bar at Top */}
            <div 
              className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-75 pointer-events-none rounded-full ${
                activeCardId === 'call-card' ? 'opacity-100 shadow-[0_0_12px_rgba(6,182,212,0.9)]' : 'opacity-0'
              }`} 
            />

            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5 myanmar-text">
                <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                <span>တိုက်ရိုက် ဖုန်းခေါ်ဆိုရန်</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Direct Call
              </span>
            </div>

            {/* Direct "ခေါ်ဆိုမည်" Button - နှိပ်တာနဲ့ Phone Call တန်းခေါ်သည် */}
            <div className="w-full">
              <a
                href={`tel:${businessConfig.phone.rawNumber}`}
                className="w-full min-h-[56px] py-3.5 px-6 rounded-xl glass-button-primary flex items-center justify-center gap-3 text-white font-bold text-base sm:text-lg tracking-wide shadow-xl shadow-cyan-500/35 active:scale-[0.98] hover:scale-[1.02] transition-all cursor-pointer group"
                title={`${businessConfig.phone.displayNumber} သို့ ဖုန်းခေါ်ဆိုမည်`}
              >
                <PhoneCall className="w-5 h-5 text-cyan-100 group-hover:rotate-12 transition-transform" />
                <span className="myanmar-text text-lg">ခေါ်ဆိုမည်</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-cyan-100 bg-white/10 py-1 px-3 rounded-lg border border-white/20">
                  {businessConfig.phone.displayNumber}
                </span>
              </a>
            </div>

            {/* Quick Note about Hours & Location */}
            <div className="mt-3.5 pt-2.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-400 px-1">
              <div className="flex items-center gap-1.5 myanmar-text">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{businessConfig.workingHours}</span>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsContactModalOpen(true);
                }}
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 myanmar-text self-start sm:self-auto cursor-pointer"
              >
                အသေးစိတ် အချက်အလက်များ
              </button>
            </div>
          </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            EXACT BOTTOM QUOTE
            ✨ Quality သည် ကျွန်တော်ရဲ့ ဦးစားပေး ဖြစ်ပြီး
            🤝 ယုံကြည်မှု သည် ကျွန်တော်၏တန်ဖိုး ဖြစ်ပါသည်။ 💎
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <footer className="w-full text-center pt-2 pb-6 border-t border-white/5">
          <div className="relative inline-block max-w-md mx-auto py-3.5 px-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-inner group hover:border-cyan-400/50 hover:bg-white/[0.06] transition-all duration-200">
            <p className="text-sm sm:text-base font-medium text-slate-200 leading-relaxed myanmar-text">
              ✨ Quality သည် ကျွန်တော်ရဲ့ ဦးစားပေး ဖြစ်ပြီး
            </p>
            <p className="text-sm sm:text-base font-semibold text-cyan-300 leading-relaxed myanmar-text mt-1">
              🤝 ယုံကြည်မှု သည် ကျွန်တော်၏တန်ဖိုး ဖြစ်ပါသည်။ 💎
            </p>
          </div>

          <div className="mt-3.5 text-[11px] text-slate-400/80 tracking-wide">
            © {new Date().getFullYear()} Zay Gyi • Mobile Service & Second-Hand
          </div>
        </footer>

      </main>

      {/* QR Code Sharing Modal */}
      <QRCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        brandTitle={`Zay Gyi • ${businessConfig.brandTitle}`}
      />

      {/* Contact Details Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        config={businessConfig}
      />
    </div>
  );
}
