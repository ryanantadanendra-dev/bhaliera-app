import { Suspense } from 'react'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/Services/ServiceSection'

export const metadata = {
    title: 'Services - Land Certification & Legal Services | Bhaliera',
    description:
        'Land certification, legal consulting, and permit services in Indonesia. Bhaliera helps you manage land documents securely, efficiently, and legally.',
    keywords: [
        'land certification Indonesia',
        'sertifikasi tanah Indonesia',
        'land legal consulting',
        'jasa legalitas tanah',
        'BPN land processing',
        'pengurusan sertifikat tanah',
        'land ownership verification',
        'cek status tanah',
        'izin pertanahan',
        'property legal services Indonesia',
        'jasa pengurusan tanah',
        'land permit services',
        'legal land consultant Indonesia',
        'pengurusan BPN',
        'land documentation services',
        'konsultan hukum pertanahan',
        'jasa sertifikat tanah terpercaya',
        'Indonesia land legal services',
        'pengurusan balik nama tanah',
        'hak milik tanah Indonesia',
    ],
    openGraph: {
        title: 'Land Certification & Legal Services',
        description:
            'Land certification, legal consulting, and permit services in Indonesia. Bhaliera helps you manage land documents securely, efficiently, and legally.',
        locale: 'id_ID',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services - Land Certification & Legal Services',
        description:
            'Your trusted partner for land permits, construction licensing, halal and ISO 22000 certification. Fast, compliant, and professional solutions.',
        creator: '@bhalieragroup',
        images: [
            {
                url: 'https://bhaliera.com/public/assets/service1.jpeg',
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

const Services = () => {
    return (
        <>
            <Hero title="Services" />
            <main>
                <Suspense fallback={null}>
                    <ServicesSection />
                </Suspense>
            </main>
        </>
    )
}

export default Services
