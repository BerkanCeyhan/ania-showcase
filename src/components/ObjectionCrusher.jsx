import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function ObjectionCrusher() {
  const [openIdx, setOpenIdx] = useState(null);

  const objections = [
    {
      q: "Ich habe extrem wenig Zeit und bin oft gestresst.",
      a: "Genau deshalb ist dieses Programm für dich. Du brauchst keine stundenlangen Workouts. Die ersten Wochen bestehen aus sehr kompakten Einheiten (ca. 2 Stunden Material pro Woche). Es ist so konzipiert, dass es dir Energie gibt, statt sie dir durch weiteren Stress zu rauben."
    },
    {
      q: "Normale Workouts tun mir weh – meine Gelenke machen das nicht mehr mit.",
      a: "Das ist das Herzstück der 3D-Methode. Wir verzichten komplett auf Sprünge, schweres Gewichtestemmen oder Bewegungen, die Verschleiß fördern. Funktionelles Yoga und Mobility bauen sanft Kraft auf, entlasten die Gelenke und 'schmieren' sie von innen."
    },
    {
      q: "Kann ich ab 40 überhaupt noch abnehmen durch die Hormone?",
      a: "Ja, absolut! Aber die Spielregeln haben sich geändert. Eine normale Diät funktioniert nicht mehr, weil dein Körper bei Stress (und Diät ist Stress) Fett bunkert. Wir regulieren dein Nervensystem und passen die Ernährung nach ayurvedischen Prinzipien an deinen Zyklus und dein Alter an."
    },
    {
      q: "Ich habe schon so viel probiert, warum sollte das hier klappen?",
      a: "Weil herkömmliche Methoden die hormonelle Umstellung nach 40 ignorieren. Dieses Coaching ist zu 100% auf diese spezifische Lebensphase zugeschnitten. Wir behandeln nicht die Symptome, sondern geben dem Körper die Signale, die er jetzt braucht, um wieder ins Gleichgewicht zu kommen."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#30302d] text-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-center text-[clamp(2rem,4vw,3rem)] mb-16 text-white">
          Du fragst dich vielleicht...
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