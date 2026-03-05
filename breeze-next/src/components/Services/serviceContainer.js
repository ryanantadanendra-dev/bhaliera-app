'use client'

import waLink from '@/lib/waLink'
import Image from 'next/image'
import Link from 'next/link'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

export default function ServiceCard({ service, index, isOpen, toggle }) {
    const even = index % 2 === 0

    return even ? (
        <section
            key={index}
            id={slugify(slugify(service.name))}
            className={`service-container w-screen h-full md:min-h-full py-7 px-16  lg:py-8 ${index == 2 && 'bg-[#F5EAD8]'} text-black`}>
            <div className="flex flex-col md:flex-row md:justify-center items-center w-full h-full gap-12">
                <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[26rem]">
                    <Image
                        src={service.image}
                        alt={`${service.name} image`}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   33vw"
                        className="object-cover"
                    />
                </figure>
                <div className="w-full md:w-1/2 h-full lg:h-96 flex flex-col justify-around">
                    <h3 className="text-3xl font-bold">{service.name}</h3>
                    <p>{service?.subname}</p>
                    <ul className="list-disc mt-8 md:mt-0">
                        {service?.offers?.map((offer, index) => (
                            <li key={index} className="mt-2 lg:ms-5">
                                {offer}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => toggle(service.name)}
                        className={`bg-transparent ${index == 2 && 'text-black'} font-bold w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-4`}
                        style={{ color: 'var(--color-secondary)' }}>
                        <p className="text-center font-extrabold">Learn More</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-2">
                            <path
                                fill={`${index == 0 ? '#dfae74' : '#000000'}`}
                                d={`${isOpen ? 'M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' : 'M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}`}
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`extended-section w-full flex flex-col md:flex-row gap-12 ${isOpen ? 'visible h-full py-32' : 'invisible h-0 py-0'} transition-all duration-200 ease-out`}>
                <div className="lg:w-1/2 h-full">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: service?.summary.replace(
                                /\n\s*\n?/g,
                                '<br /><br />',
                            ),
                        }}
                    />
                </div>
                <div className="lg:w-1/2 h-full md:px-12">
                    <h3 className="text-2xl font-bold">
                        Ready to Start Your {service.name} Process?
                    </h3>
                    <p className="mt-5 text-[0.9rem]">
                        Contact us today for a free consultation and let our
                        experts guide you through every step
                    </p>
                    <Link
                        href={waLink({
                            data: service?.name,
                            isService: true,
                        })}
                        target="_blank"
                        className={`mt-12 w-40 h-16 block ${index == 0 ? 'bg-[#f5c77e] text-black' : 'bg-black text-white'} rounded-xl shadow-lg shadow-[#00000020]`}>
                        <p className="flex justify-center items-center h-full">
                            Get Started Now!
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    ) : (
        <div
            key={index}
            id={slugify(service.name)}
            className={`service-container w-screen h-full md:min-h-full px-12 gap-12 py-7 lg:py-8  ${index == 1 ? 'bg-[#0f2742] text-white' : index == 3 ? 'bg-[#f5c77e] text-black' : ''}`}>
            <div className="justify-end flex flex-col-reverse md:justify-center md:flex-row items-center">
                <div className="md:w-1/2 w-full h-full lg:h-96 flex flex-col justify-around">
                    <h3
                        className={`text-3xl font-bold ${index == 1 ? 'text-white' : 'text-black'}`}>
                        {service.name}
                    </h3>
                    <ul className="list-disc mt-8 md:mt-0">
                        {service?.offers.map((offer, index) => (
                            <li key={index} className="mt-2 lg:ms-5">
                                {offer}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => toggle(service.name)}
                        className={`${index == 3 ? 'text-black' : 'text-[#dfae74]'} bg-transparent w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-0`}>
                        <p className="text-center font-extrabold">Learn More</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-2">
                            <path
                                fill={`${index == 1 ? '#dfae74' : '#000000'}`}
                                d={`${isOpen ? 'M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' : 'M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}`}
                            />
                        </svg>
                    </button>
                </div>
                <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[26rem]">
                    <Image
                        src={service.image}
                        alt={`${service.name} image`}
                        quality={90}
                        fill
                        sizes="(max-width: 768px) 100vw,
       (max-width: 1200px) 50vw,
       33vw"
                        className="object-cover"
                    />
                </figure>
            </div>
            <div
                className={`extended-section w-full flex-col md:flex-row flex gap-12 ${isOpen ? 'visible h-full py-32' : 'invisible h-0 py-0'} transition-all duration-200 ease-out`}>
                <div className="lg:w-1/2 h-full">
                    <p
                        dangerouslySetInnerHTML={{
                            __html: service?.summary.replace(
                                /\n\s*\n?/g,
                                '<br /><br />',
                            ),
                        }}
                    />
                </div>
                <div className="lg:w-1/2 h-full md:px-12">
                    <h3
                        className={`text-2xl font-bold ${index == 1 ? 'text-white' : 'text-black'} `}>
                        Ready to Start Your {service.name} Process?
                    </h3>
                    <p
                        className={`mt-5 text-[0.9rem] ${index == 1 ? 'text-white' : 'text-black'}`}>
                        Contact us today for a free consultation and let our
                        experts guide you through every step
                    </p>
                    <Link
                        href={waLink(service.name, true)}
                        target="_blank"
                        className={` mt-12 w-40 h-16 block ${index == 1 ? 'bg-[#f5c77e] text-black' : 'bg-black text-white'} rounded-xl shadow-lg shadow-[#00000020`}>
                        <p className="flex justify-center items-center h-full">
                            Get Started Now!
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
