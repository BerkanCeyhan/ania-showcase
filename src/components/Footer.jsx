export default function Footer() {
  return (
    <footer className="bg-[#30302d] text-white/60 py-12 px-6 rounded-t-[3rem] mt-[-2rem] relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-3">
          <img 
            src={`${import.meta.env.BASE_URL}silhouette-white.png`}
            alt="Ania Yoga Silhouette" 
            className="h-14 w-auto opacity-70"
          />
          <div className="font-heading text-2xl font-bold text-white/90 tracking-wide">
            Ania Yoga
          </div>
        </div>

        <div className="flex gap-6 font-body text-sm">
          <a href="https://www.yogawithania.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Impressum</a>
          <a href="https://www.yogawithania.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Datenschutz</a>
          <a href="https://www.yogawithania.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AGB</a>
        </div>

      </div>
      
      <div className="max-w-6xl mx-auto mt-8 text-center md:text-left font-mono text-[10px] uppercase text-white/30">
        &copy; {new Date().getFullYear()} Ania Yoga Coaching. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
