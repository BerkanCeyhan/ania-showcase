import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CTA_URL } from '../lib/cta';

export default function MobileCTABar({ content }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 100vh (approx hero section)
      if (window.scrollY > window.innerHeight * 0.8 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to handle reload halfway down the page
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] md:hidden bg-[#1A1A18]/95 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded-full shadow-2xl transform transition-transform duration-500 ease-out translate-y-0">
      
      <button 
        onClick={() => setIsDismissed(true)}
        className="absolute -top-2 -right-1 w-7 h-7 bg-text rounded-full flex items-center justify-center border border-white/20 text-white z-50 shadow-xl"
        aria-label={content.close}
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 pl-2">
          <div className="font-heading font-bold text-white text-xs tracking-tight">
            {content.title}
          </div>
          <div className="font-mono text-[9px] text-accent font-bold bg-accent/10 px-1.5 py-0.5 rounded">
            4.9 ★
          </div>
        </div>
        
        <a href={CTA_URL} target="_blank" rel="noreferrer" className="bg-accent text-white px-4 py-2 rounded-full font-bold text-[10px] shadow-md whitespace-nowrap uppercase tracking-wider flex items-center justify-center">
          <span>{content.cta}</span>
        </a>
      </div>
    </div>
  );
}
