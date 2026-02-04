import LoginLinks from '@/app/LoginLinks'
import Image from 'next/image'
import Pattern from '../../public/assets/pattern.png'
import ServicesSection from '@/components/Home/ServicesSection'
import WhySection from '@/components/Home/WhySection'
import BlogsSection from '@/components/Home/BlogsSection'
import Portfolios from '@/components/Service/Portfolios'
import TestimoialsSection from '@/components/Service/TestimonialsSection'
import Link from 'next/link'

export const metadata = {
    title: 'Your Trusted Partner in Legal, Licensing, and Certification Solutions - Bhaliera.com',
    description:
        'provides integrated legal, licensing, and certification services through a professional, transparent, and regulation-compliant approach to support long-term business sustainability.',
    keywords: [
        'legal licensing services',
        'certification consulting',
        'land certification',
        'construction licensing',
        'halal certification',
        'ISO 22000',
        'regulatory compliance',
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
        images: [],
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

const Home = () => {
    return (
        <>
            <section className="relative min-h-screen md:min-h-full lg:h-screen text-center md:py-32 lg:py-0 md:text-left flex flex-col justify-center px-8 lg:px-0 lg:justify-start sm:items-center md:items-start pt-0 bg-[#082841]">
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl lg:text-left ms-0 lg:ms-10 lg:pe-[30rem] md:pe-32 md:mt-28 lg:mt-40 z-30">
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
                <div className="mt-10">
                    <Link
                        href="/contact"
                        className="secondary-bg px-5 py-2 ms-0  mt-6 lg:ms-10 lg:mt-10 lg:py-4"
                        style={{ fontFamily: 'var(--font-inter)' }}>
                        Contact Now!
                    </Link>
                </div>
                <div className="image-wrapper absolute top-10 right-0 lg:-top-2">
                    <figure className="relative w-56 h-32 lg:w-96 lg:h-56 ">
                        <Image
                            src={Pattern}
                            alt="brand pattern"
                            fill
                            sizes="100px"
                            className="object-cover"
                        />
                    </figure>
                </div>
                <div className="image-wrapper absolute top-32 left-0">
                    <figure className="relative  w-56 h-32 lg:w-[30rem] lg:h-56">
                        <Image
                            src={Pattern}
                            alt="brand pattern"
                            fill
                            sizes="100px"
                            className="object-cover"
                        />
                    </figure>
                </div>
                <div className="image-wrapper absolute bottom-0 right-0 ">
                    <figure className="relative w-72 h-44 lg:w-96 lg:h-56">
                        <Image
                            src={Pattern}
                            alt="brand pattern"
                            fill
                            sizes="100px"
                            className="object-cover"
                        />
                    </figure>
                </div>
            </section>
            <ServicesSection />
            <WhySection />
            <BlogsSection />
            <Portfolios />
            <TestimoialsSection />
        </>
    )
}

export default Home
