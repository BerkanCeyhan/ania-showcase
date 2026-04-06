import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FailedSolutions() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fail-header', {
        y: 30, opacity: 0, duration: 0.8,
        scrollTrigger: { trigger: '.fail-header', start: 'top 85%' }
      });
      gsap.from('.fail-card', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: '.fail-cards-container', start: 'top 80%' },
        onComplete: () => {
          gsap.to('.fail-line', { strokeDashoffset: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const solutions = [
    {
      title: "Klassisches Fitness-Training",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", // Heavy/Cold Gym
      desc: "Die 30-jährigen Trainer lassen dich springen und Gewichte stemmen. Das Resultat? Deine Gelenke schmerzen, dein Cortisolspiegel steigt, und du nimmst durch den Stress sogar zu."
    },
    {
      title: "Radikale Diäten",
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80", // Stress/Measuring
      desc: "Du isst weniger, fühlst dich schwach und dein Stoffwechsel fährt herunter. Dein Körper klammert sich an jedes Gramm, weil er in der hormonellen Umstellung Sicherheit braucht, keinen Mangel."
    },
    {
      title: "Langweilige Physiotherapie",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80", // Clinical/Hospital vibe
      desc: "Man behandelt isoliert deine schmerzende Schulter oder Hüfte, aber ignoriert den Rest deines Körpers. Die Schmerzen kommen immer wieder zurück, weil die wahre Ursache nicht gelöst wird."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#30302d] text-background" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="fail-header text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,5vw,3rem)] leading-tight mb-6">
            Warum die üblichen Wege, die wir kennen, nie wirklich funktionieren...
          </h2>
          <p className="font-body text-background/70 text-lg max-w-2xl mx-auto">
            Was mit 30 funktioniert hat, schadet dir jetzt oft mehr. Dein Körper braucht keine härteren Workouts – er braucht intelligentere Reize.
          </p>
        </div>

        <div className="fail-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="fail-card group relative bg-[#393936] rounded-3xl overflow-hidden min-h-[320px] flex flex-col justify-end p-8 border border-white/5">
              
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={sol.image} 
                  alt={sol.title}
                  className="w-full h-full object-cover opacity-30 grayscale transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30302d] via-[#30302d]/60 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <h3 className="font-body font-bold text-xl mb-4 text-white">{sol.title}</h3>
                <p className="font-body text-white/70 leading-relaxed text-sm">
                  {sol.desc}
                </p>
              </div>
              
              {/* Surgical Strike Line - Top Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
                <line 
                  x1="0" y1="0" x2="100%" y2="100%" 
                  stroke="#FF2200" strokeWidth="2" strokeOpacity="0.8"
                  strokeDasharray="1000" strokeDashoffset="1000"
                  className="fail-line"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="fail-header mt-16 text-center">
          <p className="font-heading italic text-2xl text-accent">
            Wenn diese Lösungen wirklich die Antwort wären, hätten sie längst funktioniert.
          </p>
        </div>
      </div>
    </section>
  );
}