import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutMe({ content }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-image', 
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, 
          scrollTrigger: { trigger: '.about-container', start: 'top 85%', once: true } 
        }
      );
      gsap.fromTo('.about-content', 
        { x: 50, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, 
          scrollTrigger: { trigger: '.about-container', start: 'top 85%', once: true } 
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ueber-mich" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto about-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Image with organic frame */}
        <div className="about-image relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-dark/10 border-8 border-surface relative z-10">
            <img 
              src={`${import.meta.env.BASE_URL}ania-about.PNG`}
              alt="Ania - Yoga & Movement Coach" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-surface rounded-full -z-10"></div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <p className="font-mono text-accent text-xs tracking-widest uppercase font-bold mb-4">{content.eyebrow}</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-text mb-8">
            {content.title}
          </h2>
          
          <div className="font-body text-text/80 text-lg space-y-6 leading-relaxed mb-10">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}${content.signatureImage}`} 
              alt="Ania Signature" 
              className="h-10 w-auto self-start opacity-90"
            />
            <p className="font-mono text-[10px] text-text/40 uppercase tracking-widest">{content.followers}</p>
            <p className="font-mono text-[10px] text-text/40 uppercase tracking-widest">{content.role}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
