import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Activity, Flame, BatteryWarning } from 'lucide-react';

export default function ProblemSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in intro
      gsap.fromTo('.problem-intro', 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, 
          scrollTrigger: { trigger: '.problem-intro', start: 'top 95%', once: true } 
        }
      );
      // Fade in cards - using 0.2 as base opacity to ensure they are visible even if trigger is missed
      gsap.fromTo('.problem-card', 
        { y: 40, opacity: 0.2 },
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, 
          scrollTrigger: { trigger: '.problem-card-container', start: 'top 95%', once: true } 
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: Activity,
      image: "/stiffness-problem.jpg",
      title: "Gelenke, die nicht mehr mitmachen",
      desc: "Die normalen Fitness-Workouts tun nur noch weh. Deine Schultern und Hüften fühlen sich steif an, als würde die Schmierung fehlen. Herkömmliches Training macht es eher schlimmer als besser."
    },
    {
      icon: Flame,
      image: "/zunahme.jpg",
      title: "Unerklärliche Gewichtszunahme",
      desc: "Du isst wie immer, bewegst dich wie immer, aber die Waage zeigt nach oben. Der Bauch wird weicher. Es fühlt sich an, als hättest du die Kontrolle über deinen eigenen Körper verloren."
    },
    {
      icon: BatteryWarning,
      image: "/neben-sich-stehen.jpg",
      title: "Du stehst 'neben dir'",
      desc: "Die Energie von früher ist weg. Du fühlst dich oft schwer, gestresst und unwohl in deiner eigenen Haut. Du wünschst dir dieses Gefühl von Leichtigkeit und Stärke zurück."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-background relative z-30 overflow-visible" ref={containerRef} style={{ minHeight: '600px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="problem-intro text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase font-bold mb-4">Kommt dir das bekannt vor?</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] leading-tight text-text mb-6">
            Dein Körper hat sich verändert. <br className="hidden md:block"/>Die Spielregeln auch.
          </h2>
          <p className="font-body text-text/80 text-lg leading-relaxed">
            Ab 40 verändern sich die Hormone. Der Körper braucht jetzt andere Reize. 
            Wenn dein Körper sich steifer, schwerer oder empfindlicher anfühlt als früher — 
            dann ist das kein Versagen. Es ist ein Signal.
          </p>
        </div>

        <div className="problem-card-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((prob, idx) => (
            <div key={idx} className="problem-card group bg-surface rounded-3xl overflow-hidden border border-text/5 hover:border-accent/30 transition-all duration-500 shadow-sm flex flex-col relative z-10">
              <div className="h-56 overflow-hidden relative shrink-0">
                <img 
                  src={prob.image} 
                  alt={prob.title}
                  className="w-full h-full object-cover grayscale opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                  <prob.icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="font-body font-bold text-xl text-text mb-4">{prob.title}</h3>
                <p className="font-body text-text/75 leading-relaxed text-sm">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
