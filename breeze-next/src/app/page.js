import LoginLinks from '@/app/LoginLinks'
import Image from 'next/image'
import Pattern from '../../public/assets/pattern.png'
import ServicesSection from '@/components/Home/ServicesSection'
import WhySection from '@/components/Home/WhySection'
import BlogsSection from '@/components/Home/BlogsSection'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-center lg:justify-start sm:items-center lg:items-start sm:pt-0 bg-[#082841]">
                <h1 className=" text-white text-3xl lg:text-5xl lg:text-left ms-3 lg:ms-10 lg:pe-[30rem] lg:mt-40">
                    Your Trusted Partner in Legal, Licensing, and Certification
                    Solutions.
                </h1>
                <h2
                    className="text-white text-xs lg:text-lg lg:ms-10 lg:pe-[35rem] ms-3 mt-4"
                    style={{ fontFamily: 'var(--font-inter)' }}>
                    <span className="secondary-text font-bold">BHALIERA </span>
                    provides integrated legal, licensing, and certification
                    services through a professional, transparent, and
                    regulation-compliant approach to support long-term business
                    sustainability.
                </h2>
                <div>
                    <button
                        className="secondary-bg px-5 py-2 ms-3 mt-4 lg:ms-10 lg:mt-10 lg:py-4"
                        style={{ fontFamily: 'var(--font-inter)' }}>
                        Contact Now!
                    </button>
                </div>
                <div className="image-wrapper absolute top-10 right-0 w-56 h-32 lg:w-96 lg:h-56 lg:-top-2">
                    <Image src={Pattern} fill className="object-cover top-0" />
                </div>
                <div className="image-wrapper absolute top-32 left-0 w-56 h-32 lg:w-[30rem] lg:h-56">
                    <Image src={Pattern} fill className="object-cover top-0" />
                </div>
                <div className="image-wrapper absolute bottom-0 right-0 w-72 h-44 lg:w-96 lg:h-56">
                    <Image src={Pattern} fill className="object-cover top-0" />
                </div>
            </div>
            <ServicesSection />
            <WhySection />
            <BlogsSection />
        </>
    )
}

export default Home
