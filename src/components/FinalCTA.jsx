import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck } from 'lucide-react';
import { CTA_URL } from '../lib/cta';

export default function FinalCTA({ content }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-anim', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: '.cta-container', start: 'top 85%' }
      });
      gsap.to('.cta-btn', {
        scale: 1.05, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="call" className="py-24 md:py-32 px-6 bg-[#30302d] text-background border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-[80vh]" ref={containerRef}>
      
      {/* Visual Background - Wunschziel Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80" 
          alt="Desired Outcome: Freedom and Lightness" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#30302d] via-[#30302d]/40 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 cta-container">
        <h2 className="cta-anim font-heading text-[clamp(2.5rem,6vw,4rem)] leading-tight mb-6">
          {content.title}
        </h2>
        
        <p className="cta-anim font-heading italic text-xl md:text-2xl text-accent/90 mb-10">
          {content.subtitle}
        </p>

        <div className="cta-anim flex flex-col items-center mb-8">
          <a href={CTA_URL} target="_blank" rel="noreferrer" className="cta-btn inline-flex items-center justify-center bg-accent text-white px-8 md:px-10 py-5 rounded-full font-bold text-base md:text-xl shadow-[0_0_40px_-10px_rgba(212,168,67,0.5)] hover:shadow-[0_0_60px_-10px_rgba(212,168,67,0.6)] transition-shadow whitespace-nowrap">
            <span>{content.button}</span>
          </a>
        </div>

        <div className="cta-anim font-mono text-xs text-white/50 tracking-wide space-y-2 mt-8">
          <p className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" /> {content.reassurance}
          </p>
          <p>{content.note}</p>
        </div>
      </div>
    </section>
  );
}
