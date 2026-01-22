'use client'

import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'

const Portfolios = ({ service }) => {
    const isMobile = useIsMobile()

    return (
        <div className="w-screen min-h-screen pt-20">
            <h1 className="text-center text-5xl">Our PortFolios</h1>
            <h2 className="text-center mt-3 text-2xl">
                A Showcase of Our Professional Work
            </h2>
            <div className=" flex justify-center flex-wrap lg:gap-8 mt-32 gap-12">
                {service[0]?.portfolios.map((portfolio, index) => (
                    <div
                        key={index}
                        className="relative lg:w-64 lg:h-96 bg-white shadow-xl group">
                        {/* <Image
                            src={portfolio.image}
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div
                            className={`portfolio-title w-full h-20 absolute text-white font-bold group-hover:bottom-0 group-hover:opacity-100 ${!isMobile ? '-bottom-10 opacity-0' : 'bottom-0'} transition-all duration-200 ease-out'} rounded-2xl`}>
                            <h1 className="z-50 lg:text-xl text-left px-8">
                                {portfolio.title}
                            </h1>
                        </div> */}
                        <div className="w-full h-44 relative">
                            <Image src={portfolio.image} fill />
                        </div>
                        <div className="lg:px-5 lg:pt-4">
                            <h1 className="font-bold lg:text-[1.3rem]">
                                {portfolio.title}
                            </h1>
                            <p className="lg:mt-3">{portfolio.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolios
