import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function ObjectionCrusher({ content }) {
  const [openIdx, setOpenIdx] = useState(null);

  const objections = content.items;

  return (
    <section className="py-24 md:py-32 px-6 bg-[#30302d] text-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-center text-[clamp(2rem,4vw,3rem)] mb-16 text-white">
          {content.title}
        </h2>

        <div className="space-y-4">
          {objections.map((obj, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#393936] shadow-xl' : 'bg-transparent hover:bg-white/5'}`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left"
                >
                  <span className="font-body font-bold text-lg pr-8 text-white">{obj.q}</span>
                  <Plus className={`w-5 h-5 text-accent shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                >
                  <p className="font-body text-background/70 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                    {obj.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
