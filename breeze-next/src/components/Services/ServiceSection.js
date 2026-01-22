import services from '@/services.json'
import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'

const ServicesSection = () => {
    const displayData = services?.services?.map((service, index) => {
        if (index % 2 == 0) {
            return (
                <div className="service-container flex flex-col md:flex-row w-screen h-full md:h-96 mt-10 items-center px-12 gap-12">
                    <div className="image-wrapper relative w-80 h-56 lg:w-96 lg:h-64">
                        <Image
                            src={service.image}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold">{service.name}</h1>
                        <p>{service.description}</p>
                        <Link href={`/services/${service.name}`}>
                            <button className="px-5 py-3 bg-transparent border-2 border-[#dfae74] ms-8 lg:ms-0 mt-12 lg:mt-5 rounded-3xl">
                                <div className="flex gap-3">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        className="w-4 rotate-45">
                                        <path
                                            fill="#dfae74"
                                            d="M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="service-container justify-end flex flex-col-reverse md:flex-row w-screen h-full mt-12 md:h-56 md:mt-10 items-center px-12 gap-12">
                    <div className="lg:w-1/2 w-full">
                        <h1 className="text-3xl font-bold">{service.name}</h1>
                        <p>{service.description}</p>
                        <Link href={`/services/${service.name}`}>
                            <button className="px-5 py-3 bg-transparent border-2 border-[#dfae74] ms-8 mt-12 lg:mt-5 rounded-3xl lg:ms-0">
                                <div className="flex gap-3">
                                    Learn More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        className="w-4 rotate-45">
                                        <path
                                            fill="#dfae74"
                                            d="M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="image-wrapper relative lg:w-96 lg:h-64 w-80 h-56">
                        <Image
                            src={service.image}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="w-screen min-h-screen bg-white lg:pt-20 pt-20 pb-32">
            {displayData}
        </div>
    )
}
export default ServicesSection
