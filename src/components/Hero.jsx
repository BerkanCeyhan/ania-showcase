import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CTA_URL } from '../lib/cta';

export default function Hero({ content }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.3,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] lg:h-[100dvh] overflow-hidden bg-[#F6F4F1] lg:grid lg:grid-cols-2">
      
      {/* Linke Seite: Content (50%) */}
      <div className="relative z-20 flex flex-col justify-end lg:justify-center pt-32 pb-20 md:pb-32 lg:pt-32 lg:pb-16 px-6 md:px-12 lg:px-16 xl:px-24 bg-[#F6F4F1] h-full order-2 lg:order-1">
        <div className="max-w-lg mx-auto lg:max-w-m">
          <div className="hero-anim inline-block bg-accent/10 backdrop-blur-md border border-accent/20 px-4 py-1.5 rounded-full mb-6 self-start">
            <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-accent font-bold">{content.badge}</p>
          </div>

          <h1 className="hero-anim text-[clamp(2.5rem,6vw,3.5rem)] xl:text-[3.8rem] leading-[1.05] mb-6 text-text">
            <span className="font-body font-bold block">{content.titleTop}</span>
            <span className="font-heading italic font-light text-accent block mt-2 text-[clamp(2.8rem,7vw,4.2rem)] xl:text-[4.8rem]">{content.titleAccent}</span>
          </h1>

          <p className="hero-anim font-body text-base md:text-lg text-text/70 mb-8 leading-relaxed max-w-md">
            {content.description}
          </p>

          <div className="hero-anim flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <a href={CTA_URL} target="_blank" rel="noreferrer" className="btn-hover w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold text-center text-base shadow-xl shadow-accent/20 flex items-center justify-center">
              <span>{content.cta}</span>
            </a>
            <div className="flex flex-col">

              <p className="font-mono text-[10px] text-text/40 tracking-wide uppercase font-bold">{content.availabilityLabel}</p>
              <p className="font-body text-xs text-accent font-medium">{content.availabilityText}</p>
            </div>
          </div>

          <div className="hero-anim flex items-center gap-4 pt-6 border-t border-text/5">
            <div className="flex -space-x-3">
              {[32, 34, 36, 38].map(id => (
                <div key={id} className="w-10 h-10 rounded-full border-2 border-[#F6F4F1] bg-surface flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User avatar" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => <span key={s} className="text-accent text-xs">★</span>)}
              </div>
              <p className="font-mono text-[10px] text-text/40 uppercase tracking-widest">
                {content.ratingText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rechte Seite: Bild (50%) */}
      <div className="relative h-[60vh] lg:h-full w-full z-10 lg:z-20 overflow-hidden order-1 lg:order-2">
        <img 
          src={`${import.meta.env.BASE_URL}ania_hero.jpg`}
          alt={content.imageAlt}
          className="w-full h-full object-cover object-center lg:object-[50%_20%] brightness-[0.95] lg:brightness-100"
        />
        
        {/* Mobile Gradient (wird auf Desktop ausgeblendet) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6F4F1] via-transparent to-transparent lg:hidden"></div>
      </div>

      {/* Mobile-Only Text Color Sync - Stellt sicher, dass Texte auf Mobile lesbar bleiben falls das Bild dunkel ist */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .hero-anim.text-text { color: #1A1A18 !important; }
        }
      `}} />

    </section>
  );
}
