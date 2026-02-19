import HistorySection from '@/components/About/HistorySection'
import BrandValuesSection from '@/components/About/BrandValuesSection'
import VisionMissionSection from '@/components/About/VisionMissionSection'
import TeamSection from '@/components/About/TeamSection'
import Hero from '@/components/Hero'

export const metadata = {
    title: 'About Bhaliera | Your Trusted Partner in Legal, Licensing, and Certification Solutions',
    description:
        'Learn about Bhaliera, our visio, mission, values, and experience in certification, licensing, and compliance services for businesses.',
    keywords: [
        'certification services in Bali',
        'certification services Indonesia',
        'business certification Bali',
        'business certification Indonesia',
        'compliance consulting Bali',
        'regulatory compliance Indonesia',
        'halal certification services Indonesia',
        'BPJPH halal certification',
        'MUI halal certification',
        'ISO certification assistance Indonesia',
        'construction licensing services Bali',
        'land certification services Indonesia',
        'corporate compliance solutions',
        'SME compliance consulting',
        'regulatory approval support',
        'trusted certification partner Bali',
    ],
    openGraph: {
        title: 'About Bhaliera',
        description:
            'Discover Bhaliera’s vision, mission, values, and expertise in certification, licensing, and regulatory compliance.',
        url: 'https://bhaliera.com/about',
        siteName: 'Bhaliera',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Legal, Licensing & Certification Solutions',
        description:
            'Your trusted partner for land permits, construction licensing, halal and ISO 22000 certification. Fast, compliant, and professional solutions.',
        creator: '@bhalieragroup',
        images: [
            {
                url: 'https://bhaliera.com/public/assets/logo.png',
                width: 1200,
                height: 630,
                alt: 'Bhaliera Logo',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
}

const About = () => {
    return (
        <>
            <Hero title="About Us" />
            <main>
                <HistorySection />
                <BrandValuesSection />
                <VisionMissionSection />
                <TeamSection />
            </main>
        </>
    )
}

export default About
