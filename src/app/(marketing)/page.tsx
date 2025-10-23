import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"
import { Hero } from "@/components/sections/Hero"
import { CleanWorkflow } from "@/components/sections/CleanWorkflow"
import { StrategicPartners } from "@/components/sections/StrategicPartners"
import { AlternatingFeatures } from "@/components/sections/AlternatingFeatures"
import { Integrations } from "@/components/sections/Integrations"
import { Security } from "@/components/sections/Security"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CleanWorkflow />
        <StrategicPartners />
        <AlternatingFeatures />
        <Integrations />
        <Security />
      </main>
      <Footer />
    </>
  )
}
