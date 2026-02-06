'use client'

import services from '@/services.json'
import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'
import Portfolios from '../Service/Portfolios'
import TestimoialsSection from '../Service/TestimonialsSection'
import Scroller from '../Scroller'
import { useState } from 'react'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

const ServicesSection = () => {
    const [accorname, setAccorName] = useState('')

    const displayData = services?.services?.map((service, index) => {
        if (index % 2 == 0) {
            return (
                <section
                    key={index}
                    id={slugify(slugify(service.name))}
                    className={`service-container w-screen h-full md:min-h-full py-7 px-16  lg:py-8 ${index == 2 && 'bg-[#F5EAD8]'}`}>
                    <div className="flex flex-col md:flex-row md:justify-center items-center w-full h-full gap-12">
                        <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[26rem]">
                            <Image
                                src={service.image}
                                alt={`${service.name} image`}
                                fill
                                sizes="100px"
                                className="object-cover"
                            />
                        </figure>
                        <div className="w-full md:w-1/2 h-full lg:h-96 flex flex-col justify-around">
                            <h3 className="text-3xl font-bold">
                                {service.name}
                            </h3>
                            <p>{service?.subname}</p>
                            <ul className="list-disc mt-8 md:mt-0">
                                {service?.offers?.map((offer, index) => (
                                    <li key={index} className="mt-2 lg:ms-5">
                                        {offer}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                    setAccorName(prev =>
                                        prev == service.name
                                            ? ''
                                            : service.name,
                                    )
                                }}
                                className={`bg-transparent ${index == 0 ? 'secondary-text' : 'text-black'} font-bold w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-4`}>
                                <p className="text-center">Learn More</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-2">
                                    <path
                                        fill={`${index == 0 ? '#dfae74' : '#000000'}`}
                                        d={`${accorname == service.name ? 'M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' : 'M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}`}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`extended-section w-full flex gap-12 ${accorname == service.name ? 'visible h-full py-32' : 'invisible h-0 py-0'} transition-all duration-200 ease-out`}>
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
                        <div className="lg:w-1/2 h-full px-12">
                            <h3 className="text-2xl font-bold">
                                Ready to Start Your {service.name} Process?
                            </h3>
                            <p className="mt-5 text-[0.9rem]">
                                Contact us today for a free consultation and let
                                our experts guide you through every step
                            </p>
                            <button
                                className={`px-5 py-4 mt-12 ${index == 0 ? 'secondary-bg' : 'bg-black'} text-white rounded-xl shadow-lg shadow-[#00000020]`}>
                                Get Started Now!
                            </button>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <div
                    key={index}
                    id={slugify(service.name)}
                    className={`service-container w-screen h-full md:min-h-full px-12 gap-12 py-7 lg:py-8 text-white ${index == 1 ? 'primary-bg' : index == 3 ? 'secondary-bg' : ''}`}>
                    <div className="justify-end flex flex-col-reverse md:justify-center md:flex-row items-center">
                        <div className="md:w-1/2 w-full h-full lg:h-96 flex flex-col justify-around">
                            <h3 className="text-3xl font-bold">
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
                                onClick={() =>
                                    setAccorName(prev =>
                                        prev == service.name
                                            ? ''
                                            : service.name,
                                    )
                                }
                                className={`${index == 1 ? 'secondary-text' : 'text-black'} bg-transparent w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-0`}>
                                <p className="text-center">Learn More</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-2">
                                    <path
                                        fill={`${index == 1 ? '#dfae74' : '#000000'}`}
                                        d={`${accorname == service.name ? 'M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' : 'M247.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L179.2 256 41.9 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'}`}
                                    />
                                </svg>
                            </button>
                        </div>
                        <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[26rem]">
                            <Image
                                src={service.image}
                                alt={`${service.name} image`}
                                fill
                                sizes="100px"
                                className="object-cover"
                            />
                        </figure>
                    </div>
                    <div
                        className={`extended-section w-full flex gap-12 ${accorname == service.name ? 'visible h-full py-32' : 'invisible h-0 py-0'} transition-all duration-200 ease-out`}>
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
                        <div className="lg:w-1/2 h-full px-12">
                            <h3 className="text-2xl font-bold">
                                Ready to Start Your {service.name} Process?
                            </h3>
                            <p className="mt-5 text-[0.9rem]">
                                Contact us today for a free consultation and let
                                our experts guide you through every step
                            </p>
                            <button
                                className={`px-5 py-4 mt-12 ${index == 1 ? 'secondary-bg' : 'bg-black'} text-white rounded-xl shadow-lg shadow-[#00000020`}>
                                Get Started Now!
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return (
        <section className="w-screen min-h-screen bg-white lg:pt-20 pt-20 pb-32">
            <Scroller />
            {displayData}
        </section>
    )
}
export default ServicesSection
