import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import FailedSolutions from './components/FailedSolutions'
import Mechanism from './components/Mechanism'
import ProgramSnapshot from './components/ProgramSnapshot'
import AboutMe from './components/AboutMe'
import SocialProof from './components/SocialProof'
import ObjectionCrusher from './components/ObjectionCrusher'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTABar from './components/MobileCTABar'
import { siteContent } from './content/siteContent'

function App({ locale = 'de' }) {
  const content = siteContent[locale]

  return (
    <div className="relative w-full bg-background min-h-screen">
      <Navbar content={content.navbar} />
      <main className="relative w-full flex flex-col overflow-x-hidden">
        <Hero content={content.hero} />
        <ProblemSection content={content.problem} />
        <FailedSolutions content={content.failedSolutions} />
        <Mechanism content={content.mechanism} />
        <ProgramSnapshot content={content.snapshot} />
        <AboutMe content={content.about} />
        <SocialProof content={content.socialProof} />
        <ObjectionCrusher content={content.objections} />
        <FinalCTA content={content.finalCta} />
        <Footer content={content.footer} />
      </main>
      <MobileCTABar content={content.mobileBar} />
    </div>
  )
}

export default App
