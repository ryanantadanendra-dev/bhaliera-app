'use client'

import Image from 'next/image'
import services from '@/services.json'

const Galleries = () => {
    const galleries = services?.galleries

    return (
        <section className="w-full min-h-screen pt-20 bg-white pb-12">
            <h2 className="text-center text-5xl">Galleries</h2>
            <p
                className="text-center mt-3 text-xl px-56"
                style={{ color: 'var(--color-primary)' }}>
                Successfully delivered land certification and permitting
                services for diverse clients across Indonesia
            </p>
            <div className="grid grid-cols-4 grid-rows-3 lg:gap-2 mt-20 gap-12 md:gap-2 lg:px-10">
                {galleries?.map((gallery, index) => (
                    <div
                        key={index}
                        className={`shadow-xl h-full ${
                            index === 0
                                ? 'col-span-2 row-span-2'
                                : index === 1
                                  ? 'col-span-2 row-span-1'
                                  : index === 6
                                    ? 'row-span-2'
                                    : index == 3
                                      ? 'row-span-2'
                                      : ''
                        }`}>
                        <figure className="w-full h-full min-h-[180px] relative">
                            <Image
                                src={gallery}
                                alt={`gallery image`}
                                fill
                                sizes="(max-width: 768px) 320px, 384px"
                                loading="lazy"
                                className="object-cover"
                            />
                        </figure>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Galleries
