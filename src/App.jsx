import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import FailedSolutions from './components/FailedSolutions'
import Mechanism from './components/Mechanism'
import AboutMe from './components/AboutMe'
import SocialProof from './components/SocialProof'
import ObjectionCrusher from './components/ObjectionCrusher'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTABar from './components/MobileCTABar'

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen">
      <Navbar />
      <main className="relative w-full flex flex-col overflow-x-hidden">
        <Hero />
        <ProblemSection />
        <FailedSolutions />
        <Mechanism />
        <AboutMe />
        <SocialProof />
        <ObjectionCrusher />
        <FinalCTA />
        <Footer />
      </main>
      <MobileCTABar />
    </div>
  )
}

export default App