import React, { useState } from 'react';
import { Phone, Copy, Check, MessageSquare, Clock, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessConfig } from '../config/businessConfig';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BusinessConfig;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, config }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async (num: string) => {
    try {
      await navigator.clipboard.writeText(num);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
            className="relative w-full max-w-sm rounded-3xl glass-panel p-6 border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 text-left"
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

            {/* Modal Title */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div 
                animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner"
              >
                <Phone className="w-5 h-5" />
              </motion.div>
              <div>
                <h3 className="text-base font-bold text-white tracking-wide myanmar-text">
                  ဖုန်းဖြင့် ဆက်သွယ်ရန်
                </h3>
                <p className="text-xs text-slate-400 myanmar-text">
                  တိုက်ရိုက် ဖုန်းခေါ်ဆိုနိုင်ပါသည်
                </p>
              </div>
            </div>

            {/* Primary Phone Box */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 hover:border-cyan-500/30 transition-all">
              <span className="text-[11px] font-medium text-slate-400 block mb-1 myanmar-text">
                အဓိက ဆက်သွယ်ရန် နံပါတ်
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold font-mono tracking-wider text-cyan-300">
                  {config.phone.displayNumber}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopyPhone(config.phone.displayNumber)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="ဖုန်းနံပါတ် ကူးယူရန်"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] text-emerald-400 mt-1 block myanmar-text"
                >
                  ဖုန်းနံပါတ် ကူးယူပြီးပါပြီ ✓
                </motion.span>
              )}

              {/* Action Row */}
              <div className="mt-3 flex gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={`tel:${config.phone.rawNumber}`}
                  className="flex-1 py-2.5 px-4 rounded-xl glass-button-primary flex items-center justify-center gap-2 text-white text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/20"
                >
                  <Phone className="w-4 h-4" />
                  <span className="myanmar-text">တိုက်ရိုက် ခေါ်ဆိုရန်</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`sms:${config.phone.rawNumber}`}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 flex items-center justify-center transition-colors"
                  title="SMS စာတိုပို့ရန်"
                >
                  <MessageSquare className="w-4 h-4 text-slate-300" />
                </motion.a>
              </div>
            </div>

            {/* Extra Info (Working Hours & Address) */}
            <div className="space-y-2.5 pt-1 text-xs text-slate-400 border-t border-white/5">
              {config.workingHours && (
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="myanmar-text">{config.workingHours}</span>
                </div>
              )}
              {config.location && (
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="myanmar-text">{config.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
