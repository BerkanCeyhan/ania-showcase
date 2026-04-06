import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutMe() {
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
              src="/ania-about.PNG" 
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
          <p className="font-mono text-accent text-xs tracking-widest uppercase font-bold mb-4">Ein Wort von Herz zu Herz</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] leading-tight text-text mb-8">
            Ich weiß genau, <br />wie du dich fühlst.
          </h2>
          
          <div className="font-body text-text/80 text-lg space-y-6 leading-relaxed mb-10">
            <p>
              Ich bin Ania, Jahrgang 1975. Ich bin Mutter, Ehefrau und ich stecke mitten in derselben Phase wie du. 
              Ich kenne die Tage, an denen sich der Körper "schwer" anfühlt, die Gelenke zwicken und die Energie scheinbar über Nacht verschwindet.
            </p>
            <p>
              Da draußen gibt es so viele laute Versprechungen – meistens von Menschen, die noch nie in einem weiblichen Körper ab 40 steckten. 
              Sie erzählen dir von "noch härterem Training" und "noch weniger Kalorien". Aber sie verstehen nicht, dass dein Körper jetzt keine Härte braucht, sondern <strong>intelligente Zuwendung</strong>.
            </p>
            <p>
              Hormone sind kein Hindernis, das man bekämpfen muss. Sie sind ein Kompass. 
              Mein Ansatz ist nicht, dich zu "reparieren" – denn du bist nicht kaputt. 
              Ich helfe dir, die neuen Spielregeln deines Körpers zu verstehen, damit du dich wieder so leicht, beweglich und strahlend fühlst, wie du es verdienst.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-heading italic text-2xl text-text">Deine Ania</p>
            <p className="font-mono text-[10px] text-text/40 uppercase tracking-widest">Gründerin der sanften 3D-Methode</p>
          </div>
        </div>

      </div>
    </section>
  );
}
