import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SocialProof({ content }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proof-stat', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: '.proof-stats', start: 'top 90%' }
      });
      gsap.from('.proof-card', {
        x: 40, opacity: 0, duration: 0.8, stagger: 0.15,
        scrollTrigger: { trigger: '.proof-cards-container', start: 'top 80%' }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      name: content.reviews[0].name,
      result: content.reviews[0].result,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      text: content.reviews[0].text
    },
    {
      name: content.reviews[1].name,
      result: content.reviews[1].result,
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
      text: content.reviews[1].text
    },
    {
      name: content.reviews[2].name,
      result: content.reviews[2].result,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
      text: content.reviews[2].text
    }
  ];

  return (
    <section id="erfahrungen" className="py-24 md:py-32 px-6 bg-background" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        
        <div className="proof-stats flex flex-wrap justify-center gap-8 md:gap-16 mb-20 text-center">
          {content.stats.map((stat) => (
            <div key={stat.label} className="proof-stat">
              <p className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="font-body text-sm text-text/70 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] text-text">{content.title}</h2>
        </div>

        <div className="proof-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="proof-card bg-surface rounded-3xl p-8 border border-text/5 relative overflow-hidden flex flex-col shadow-sm">
              <div className="flex flex-col mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-1 text-accent text-sm">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                  </div>
                  <span className="font-mono text-[10px] bg-accent/10 text-accent px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                    {review.result}
                  </span>
                </div>
              </div>
              <p className="font-body text-text/80 leading-relaxed mb-10 italic flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-text/5">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/20 shrink-0 shadow-sm">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-body font-bold text-sm text-text">{review.name}</p>
                  <p className="font-mono text-[9px] text-text/40 uppercase tracking-[0.1em]">{content.verified}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
