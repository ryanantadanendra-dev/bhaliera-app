import HistorySection from '@/components/About/HistorySection'
import BrandValuesSection from '@/components/About/BrandValuesSection'
import VisionMissionSection from '@/components/About/VisionMissionSection'
import TeamSection from '@/components/About/TeamSection'
import Hero from '@/components/Hero'

const About = () => {
    return (
        <>
            <Hero title="About Us" />
            <HistorySection />
            <BrandValuesSection />
            <VisionMissionSection />
            <TeamSection />
        </>
    )
}

export default About
