import Image from 'next/image'
import Pattern from '/public/assets/pattern.png'
import Link from 'next/link'
import dynamic from 'next/dynamic'

export const metadata = {
    title: 'Bhaliera - Your Trusted Partner in Legal, Licensing, and Certification Solutions',
    description:
        'provides integrated legal, licensing, and certification services through a professional, transparent, and regulation-compliant approach to support long-term business sustainability.',
    keywords: [
        'Bhaliera',
        'legal licensing services',
        'business licensing services',
        'certification consulting',
        'land certification services',
        'construction licensing services',
        'halal certification services',
        'ISO 22000 certification',
        'regulatory compliance services',
        'layanan perizinan legal',
        'jasa perizinan usaha',
        'konsultasi sertifikasi',
        'sertifikasi tanah',
        'perizinan konstruksi',
        'sertifikasi halal',
        'sertifikasi ISO 22000',
    ],
    openGraph: {
        title: 'Legal, Licensing & Certification Solutions',
        description:
            'Your trusted partner for land permits, construction licensing, halal and ISO 22000 certification. Fast, compliant, and professional solutions.',
        siteName: 'bhaliera.com',
        locale: 'id_ID',
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

// Optimized dynamic imports with ssr: false to reduce blocking time
const ServicesSection = dynamic(
    () => import('@/components/Home/ServicesSection'),
    {
        ssr: false,
        loading: () => <div className="h-[400px] bg-[#082841] animate-pulse" />,
    },
)
const WhySection = dynamic(() => import('@/components/Home/WhySection'), {
    ssr: false,
})
const BlogsSection = dynamic(() => import('@/components/Home/BlogsSection'), {
    ssr: false,
})
const Galleries = dynamic(() => import('@/components/Service/Galleries'), {
    ssr: false,
})
const TestimoialsSection = dynamic(
    () => import('@/components/Service/TestimonialsSection'),
    { ssr: false },
)

const Home = () => {
    return (
        <>
            <header className="relative min-h-screen md:min-h-full lg:h-screen text-center md:py-32 lg:py-0 md:text-left flex flex-col justify-center px-8 lg:px-0 sm:items-center md:items-start pt-0 bg-[#082841] overflow-hidden">
                {/* Main Content - This should be LCP element */}
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl lg:text-left ms-0 lg:ms-10 lg:pe-[18rem] md:pe-32 z-30">
                    <span>Your Trusted Partner in Legal,</span>
                    <span className="mt-0 md:mt-4 md:block">
                        Licensing, and Certification
                    </span>
                    <span className="mt-0 md:mt-4 md:block"> Solutions.</span>
                </h1>

                <p className="text-white text-xs lg:text-lg lg:ms-10 lg:pe-[35rem] ms-0 mt-6 lg:mt-4 md:pe-64 z-30">
                    <span className="secondary-text font-bold">BHALIERA </span>
                    provides integrated legal, licensing, and certification
                    services through a professional, transparent, and
                    regulation-compliant approach to support long-term business
                    sustainability.
                </p>

                <div className="mt-10 z-30">
                    <Link
                        href={'/contact'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" px-5 py-3 ms-0 mt-6 lg:ms-10 lg:mt-5 lg:py-4 inline-block hover:opacity-90 transition-opacity text-black"
                        style={{ backgroundColor: 'var(--color-secondary)' }}>
                        Contact Now!
                    </Link>
                </div>

                {/* Background Pattern Images - Changed to lazy loading with blur placeholder */}
                <div
                    className="image-wrapper absolute top-10 right-0 lg:-top-2 z-0"
                    aria-hidden="true">
                    <div className="relative w-56 h-32 lg:w-96 lg:h-56">
                        <Image
                            src={Pattern}
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 224px, 384px"
                            loading="lazy"
                            quality={60}
                            placeholder="blur"
                            className="object-cover opacity-50"
                        />
                    </div>
                </div>

                <div
                    className="image-wrapper absolute top-32 left-0 z-0"
                    aria-hidden="true">
                    <div className="relative w-56 h-32 lg:w-[30rem] lg:h-56">
                        <Image
                            src={Pattern}
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 224px, 480px"
                            loading="lazy"
                            quality={60}
                            placeholder="blur"
                            className="object-cover opacity-50"
                        />
                    </div>
                </div>

                <div
                    className="image-wrapper absolute bottom-0 right-0 z-0"
                    aria-hidden="true">
                    <div className="relative w-72 h-44 lg:w-96 lg:h-56">
                        <Image
                            src={Pattern}
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 288px, 384px"
                            loading="lazy"
                            quality={60}
                            placeholder="blur"
                            className="object-cover opacity-50"
                        />
                    </div>
                </div>
            </header>

            <main>
                {/* Below-the-fold sections - all lazy loaded */}
                <ServicesSection />
                <WhySection />
                <BlogsSection />
                <TestimoialsSection />
                <Galleries />
            </main>
        </>
    )
}

export default Home
