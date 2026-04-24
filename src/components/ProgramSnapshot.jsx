import { useMemo, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, CalendarDays, HeartPulse, Check, MoonStar, Flower2, Dumbbell, Apple, Sparkles, Leaf } from 'lucide-react';
import { CTA_URL } from '../lib/cta';

const modules = [
  { icon: Flower2, iconWrap: 'bg-accent/15 text-accent', glow: 'bg-accent/20' },
  { icon: Apple, iconWrap: 'bg-[#E8DED1] text-[#7B6148]', glow: 'bg-[#E8DED1]' },
  { icon: MoonStar, iconWrap: 'bg-[#DCE6F2] text-[#5A718C]', glow: 'bg-[#DCE6F2]' },
  { icon: Leaf, iconWrap: 'bg-[#E0E8DC] text-[#64805C]', glow: 'bg-[#E0E8DC]' },
  { icon: Sparkles, iconWrap: 'bg-[#F1E6CF] text-[#9B7C34]', glow: 'bg-[#F1E6CF]' },
  { icon: Dumbbell, iconWrap: 'bg-[#E8DED1] text-[#7B6148]', glow: 'bg-[#E8DED1]' },
];

export default function ProgramSnapshot({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);

  const stats = useMemo(
    () => content.stats,
    [content.stats],
  );

  const handleToggle = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);

    if (nextOpen) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (!detailsRef.current) return;

          const navOffset = 112;
          const targetTop = detailsRef.current.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
        }, 160);
      });
    }
  };

  return (
    <section id="snapshot" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface/80 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-start">
          <div className="bg-[#30302d] text-background rounded-[2.5rem] p-8 md:p-10 lg:p-12 shadow-[0_30px_80px_-40px_rgba(48,48,45,0.7)] border border-white/5 overflow-hidden relative">
            <div className="absolute -right-20 -top-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative z-10">
              <p className="font-mono text-accent text-xs tracking-[0.24em] uppercase font-bold mb-5">
                {content.eyebrow}
              </p>
              <h2 className="font-heading text-[clamp(2.3rem,5vw,4rem)] leading-[0.95] text-white mb-5">
                {content.title} <span className="text-accent italic font-light">{content.titleAccent}</span>
              </h2>
              <p className="font-body text-white/72 text-lg leading-relaxed max-w-2xl mb-8">
                {content.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="font-mono text-2xl text-accent font-bold mb-1">{item.value}</p>
                    <p className="font-body text-sm text-white/70 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleToggle}
                className="btn-hover inline-flex items-center gap-3 rounded-full bg-accent text-white px-7 py-4 font-bold shadow-xl shadow-accent/20"
              >
                <span>{isOpen ? content.closeCta : content.openCta}</span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

            </div>
          </div>

          <div className="bg-surface rounded-[2.5rem] p-8 md:p-10 border border-text/5 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-accent/15 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent font-bold">{content.sideTitle}</p>
                <p className="font-body text-sm text-text/55">{content.sideText}</p>
              </div>
            </div>

            <div className="space-y-4">
              {content.sideBullets.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                  </div>
                  <p className="font-body text-text/78 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={detailsRef}
          className={`grid transition-all duration-700 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-8 md:mt-10' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'}`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-[2.25rem] border border-text/5 p-7 md:p-9 shadow-[0_24px_60px_-40px_rgba(26,26,24,0.35)]">
                <h3 className="font-heading text-4xl leading-none text-text mb-6">
                  {content.detailsTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {modules.map((module, index) => {
                    const Icon = module.icon;
                    const localizedModule = content.modules[index];

                    return (
                    <div key={localizedModule.title} className="relative overflow-hidden rounded-2xl bg-background border border-text/5 px-5 py-5">
                      <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-80 ${module.glow}`}></div>
                      <div className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${module.iconWrap} mb-4`}>
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <p className="font-body font-bold text-lg text-text mb-2">{localizedModule.title}</p>
                      <div className="relative z-10 inline-flex items-center rounded-full bg-accent/10 text-accent px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] mb-3">
                        {content.modulesBadge}
                      </div>
                      <p className="relative z-10 font-body text-sm leading-relaxed text-text/70">{localizedModule.detail}</p>
                    </div>
                  )})}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-surface rounded-[2.25rem] border border-text/5 p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <CalendarDays className="w-5 h-5 text-accent" />
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-text/45 font-bold">{content.includedTitle}</p>
                  </div>

                  <div className="space-y-4">
                    {content.included.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-text/5 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                        </div>
                        <p className="font-body text-text/78 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background rounded-[2.25rem] border border-text/5 p-7 md:p-8 shadow-[0_20px_50px_-40px_rgba(26,26,24,0.3)]">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-5">{content.methodTitle}</p>
                  <p className="font-body text-text/78 leading-relaxed mb-5">{content.methodIntro}</p>

                  <div className="space-y-4 mb-6">
                    {content.methodBullets.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                        </div>
                        <p className="font-body text-text/72 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="font-heading text-[1.8rem] leading-tight text-text">
                    {content.methodResult}
                  </p>
                </div>

                <div className="bg-[#30302d] rounded-[2.25rem] border border-white/5 p-7 md:p-8 text-white">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-5">{content.supportTitle}</p>
                  <div className="space-y-4 mb-7">
                    {content.support.map((item) => (
                      <p key={item} className="font-body text-white/75 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>

                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-hover inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-bold text-white shadow-lg shadow-accent/20"
                  >
                    {content.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
