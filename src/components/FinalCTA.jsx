import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Shield, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
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
    <section className="py-24 md:py-32 px-6 bg-[#30302d] text-background border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-[80vh]" ref={containerRef}>
      
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
          Werde wieder die Frau, <br />die sich in ihrem Körper wohlfühlt.
        </h2>
        
        <p className="cta-anim font-heading italic text-xl md:text-2xl text-accent/90 mb-10">
          Schreib Ania persönlich auf WhatsApp.
        </p>

        <div className="cta-anim flex flex-col items-center mb-8">
          <a href="#whatsapp" className="cta-btn inline-flex items-center justify-center gap-3 bg-accent text-white px-8 md:px-10 py-5 rounded-full font-bold text-base md:text-xl shadow-[0_0_40px_-10px_rgba(212,168,67,0.5)] hover:shadow-[0_0_60px_-10px_rgba(212,168,67,0.6)] transition-shadow whitespace-nowrap">
            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Jetzt Ania schreiben</span>
          </a>
        </div>

        <div className="cta-anim font-mono text-xs text-white/50 tracking-wide space-y-2 mt-8">
          <p className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" /> 100% Unverbindlich via WhatsApp
          </p>
          <p>Bewerbungsfenster schließt in Kürze · Nur noch 15 Plätze frei</p>
        </div>
      </div>
    </section>
  );
}