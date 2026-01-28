'use client'

import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'

const Portfolios = ({ service }) => {
    const isMobile = useIsMobile()

    return (
        <div className="w-screen h-full pt-20 bg-white">
            <h2 className="text-center text-5xl">Our PortFolios</h2>
            <p className="text-center mt-3 text-2xl">
                A Showcase of Our Professional Work
            </p>
            <div className="flex justify-center flex-wrap lg:gap-2 mt-20 gap-12 md:gap-8 lg:px-10">
                {service[0]?.portfolios.map((portfolio, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:w-72 md:h-[23rem] w-72 h-[23rem] pb-4 px-5 bg-white shadow-xl">
                        <figure className="md:w-full md:h-44 w-full h-44 relative">
                            <Image
                                src={portfolio.image}
                                fill
                                className="object-cover"
                            />
                        </figure>
                        <h3 className="font-bold lg:text-[1.3rem] text-xl mt-5">
                            {portfolio.title}
                        </h3>
                        <p className="mt-auto">{portfolio.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolios
