import Image from 'next/image'
import Pattern from '../../public/assets/pattern.png'

const Hero = ({ title }) => {
    return (
        <div className="hero-container w-screen h-64 primary-bg pt-24 overflow-hidden relative">
            <h1 className="text-white md:text-6xl text-4xl text-center">
                {title}
            </h1>
            <div className="flex mt-4">
                <div className="w-80 h-40 relative">
                    <Image src={Pattern} fill className="object-cover" />
                </div>
                <div className="w-80 h-40 relative">
                    <Image src={Pattern} fill className="object-cover" />
                </div>
                <div className="w-80 h-40 relative">
                    <Image src={Pattern} fill className="object-cover" />
                </div>
                <div className="w-80 h-40 relative">
                    <Image src={Pattern} fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Hero
