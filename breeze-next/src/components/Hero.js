import Image from 'next/image'
import Pattern from '../../public/assets/pattern.png'

const Hero = ({ title }) => {
    return (
        <header className="hero-container w-screen h-56 md:h-64 primary-bg pt-24 overflow-hidden relative">
            <h1 className="text-white md:text-5xl lg:text-6xl text-4xl text-center">
                {title}
            </h1>
            <div className="flex mt-4">
                <figure className="w-80 h-40 relative">
                    <Image
                        src={Pattern}
                        alt="pattern"
                        fill
                        sizes="100px"
                        className="object-cover"
                    />
                </figure>
                <figure className="w-80 h-40 relative">
                    <Image
                        src={Pattern}
                        alt="pattern"
                        fill
                        sizes="100px"
                        className="object-cover"
                    />
                </figure>
                <figure className="w-80 h-40 relative">
                    <Image
                        src={Pattern}
                        alt="pattern"
                        fill
                        sizes="100px"
                        className="object-cover"
                    />
                </figure>
                <figure className="w-80 h-40 relative">
                    <Image
                        src={Pattern}
                        alt="pattern"
                        fill
                        sizes="100px"
                        className="object-cover"
                    />
                </figure>
            </div>
        </header>
    )
}

export default Hero
