import { useEffect, useState } from 'react';
import { CTA_URL } from '../lib/cta';

export default function Navbar({ content }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-3 md:px-6 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border border-text/10 text-text shadow-sm py-2' 
        : 'bg-transparent text-text py-3 md:py-4'
    }`}>
      <div className="flex items-center gap-1.5 md:gap-3 font-heading font-semibold text-base md:text-xl tracking-wide shrink-0">
        <img 
          src={`${import.meta.env.BASE_URL}silhouette-black.png`}
          alt="Ania Yoga Logo" 
          className={`${isScrolled ? 'h-6' : 'h-8'} w-auto transition-all duration-500`}
        />
        <span>Ania Yoga</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#methode" className="hover:-translate-y-[1px] transition-transform">{content.approach}</a>
        <a href="#snapshot" className="hover:-translate-y-[1px] transition-transform">{content.program}</a>
        <a href="#erfahrungen" className="hover:-translate-y-[1px] transition-transform">{content.testimonials}</a>
      </div>

      <a href={CTA_URL} target="_blank" rel="noreferrer" className={`btn-hover bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-sm font-semibold shadow-md flex items-center justify-center transition-all shrink-0`}>
        <span>{content.cta}</span>
      </a>
    </nav>
  );
}
