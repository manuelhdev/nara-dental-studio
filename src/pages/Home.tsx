import { AestheticSection } from "../components/sections/AestheticSection"
import { Concerns } from "../components/sections/Concerns"
import { DiagnosticSection } from "../components/sections/DiagnosticSection"
import { FinalCta } from "../components/sections/FinalCta"
import { FirstVisitSection } from "../components/sections/FirstVisitSection"
import { Hero } from "../components/sections/Hero"
import { Manifesto } from "../components/sections/Manifesto"
import { ResultsSection } from "../components/sections/ResultsSection"
import { SpaceSection } from "../components/sections/SpaceSection"
import { TeamSection } from "../components/sections/TeamSection"
import { TechnologySection } from "../components/sections/TechnologySection"
import { TestimonialsSection } from "../components/sections/TestimonialsSection"

export function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Concerns />
      <DiagnosticSection />
      <AestheticSection />
      <ResultsSection />
      <TechnologySection />
      <FirstVisitSection />
      <SpaceSection />
      <TeamSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  )
}
