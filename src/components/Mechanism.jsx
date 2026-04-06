import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';

export default function Mechanism() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mech-text', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: '.mech-container', start: 'top 80%' }
      });
      gsap.from('.mech-visual', {
        x: 40, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: '.mech-container', start: 'top 80%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="methode" className="py-24 md:py-32 px-6 bg-surface relative" ref={containerRef}>
      <div className="max-w-6xl mx-auto mech-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div>
          <p className="mech-text font-mono text-accent text-xs tracking-widest uppercase font-bold mb-4">Die Lösung</p>
          <h2 className="mech-text font-heading text-[clamp(2rem,4vw,3rem)] leading-tight text-text mb-6">
            <span className="block text-text/60 text-xl mb-2 font-body font-normal">Die meisten Programme setzen auf Verzicht und Härte.</span>
            Wir setzen auf die sanfte <strong className="text-text font-bold">3D-Methode</strong>.
          </h2>
          
          <div className="mech-text font-body text-text/80 text-lg leading-relaxed mb-8 space-y-4">
            <p>
              Wir arbeiten <strong>mit</strong> den hormonellen Veränderungen deines Körpers, nicht dagegen. 
              Deine Gelenke brauchen jetzt keine harten Sprünge, sondern intelligente, funktionelle Bewegung.
            </p>
            <p>
              Mein Ansatz kombiniert gelenkschonendes Yoga, tiefes Mobility-Training und die <strong className="text-accent">70/30 Hormon-Formel</strong>: 
              30% intelligentes Training, 70% zyklusgerechte Ernährung und Regeneration nach Ayurveda.
            </p>
          </div>

          <div className="mech-text space-y-4">
            {[
              "Funktionelles Yoga ohne Gelenkschmerz",
              "Cortisol senken, statt durch Stress zuzunehmen",
              "Nachhaltiger Kraftaufbau für den Alltag ab 40"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                </div>
                <span className="font-body font-medium text-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mech-visual relative h-full min-h-[400px] md:min-h-[450px] bg-background rounded-3xl p-6 md:p-10 border border-text/10 shadow-xl shadow-dark/5 flex flex-col items-center justify-center overflow-hidden">
          {/* Animated Balance System */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10 md:mb-12 flex items-center justify-center scale-90 sm:scale-100">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
            
            {/* The 70% Circle (Nutrition/Ayurveda) */}
            <svg className="absolute w-full h-full -rotate-90">
              <circle 
                cx="50%" cy="50%" r="42%" 
                fill="none" stroke="currentColor" strokeWidth="8" 
                className="text-surface md:stroke-[12]"
              />
              <circle 
                cx="50%" cy="50%" r="42%" 
                fill="none" stroke="currentColor" strokeWidth="8" 
                strokeDasharray="264%" strokeDashoffset="79%" 
                strokeLinecap="round"
                className="text-accent transition-all duration-[2s] ease-out formula-circle-70 md:stroke-[12]"
              />
            </svg>

            {/* The 30% Circle (Training) - Inner */}
            <svg className="absolute w-[75%] h-[75%] rotate-90">
              <circle 
                cx="50%" cy="50%" r="38%" 
                fill="none" stroke="currentColor" strokeWidth="8" 
                className="text-surface md:stroke-[12]"
              />
              <circle 
                cx="50%" cy="50%" r="38%" 
                fill="none" stroke="currentColor" strokeWidth="8" 
                strokeDasharray="239%" strokeDashoffset="167%" 
                strokeLinecap="round"
                className="text-text transition-all duration-[2s] ease-out formula-circle-30 md:stroke-[12]"
              />
            </svg>

            {/* Central Label */}
            <div className="relative z-10 text-center">
              <span className="block font-mono text-2xl md:text-4xl font-bold text-text">70/30</span>
              <span className="block font-body text-[10px] md:text-xs uppercase tracking-widest text-text/40">Formel</span>
            </div>
          </div>
          
          <div className="w-full space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
              <div>
                <p className="font-mono text-sm font-bold text-accent">70% Hormon-Balance</p>
                <p className="font-body text-xs text-text/60">Ernährung, Schlaf & Ayurveda</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-text mt-2 shrink-0"></div>
              <div>
                <p className="font-mono text-sm font-bold text-text">30% Intelligentes Movement</p>
                <p className="font-body text-xs text-text/60">3D-Mobility & sanftes Yoga</p>
              </div>
            </div>
          </div>

          <p className="text-center font-body text-[11px] text-text/40 mt-10 italic uppercase tracking-tighter">
            Das simple System für nachhaltige Resultate ab 40.
          </p>
        </div>

      </div>
    </section>
  );
}