import services from '@/services.json'
import { data } from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'

const ServicesSection = () => {
    const displayData = services?.services?.map((service, index) => {
        if (index % 2 == 0) {
            return (
                <div
                    key={index}
                    className={`service-container flex flex-col md:flex-row md:justify-center w-screen h-full md:h-[34rem] py-7 items-center px-12 gap-12 lg:py-8 ${index == 2 && 'bg-[#F5EAD8]'}`}>
                    <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-full">
                        <Image
                            src={service.image}
                            fill
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
                        <Link
                            href={`/services/${service.name}`}
                            className={`${index == 0 ? 'secondary-bg' : 'bg-[#082841]'} text-white w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-4`}>
                            <p className="text-center">Learn More</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-2">
                                <path
                                    fill="#FFFFFF"
                                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div
                    key={index}
                    className={`serve-container justify-end flex flex-col-reverse md:justify-center md:flex-row w-screen h-full md:h-[30rem] items-center px-12 gap-12 py-7 lg:py-8 text-white ${index == 1 ? 'primary-bg' : index == 3 ? 'secondary-bg' : ''}`}>
                    <div className="md:w-1/2 w-full h-full lg:h-96 flex flex-col justify-around">
                        <h3 className="text-3xl font-bold">{service.name}</h3>
                        <ul className="list-disc mt-8 md:mt-0">
                            {service?.offers.map((offer, index) => (
                                <li key={index} className="mt-2 lg:ms-5">
                                    {offer}
                                </li>
                            ))}
                        </ul>
                        <Link
                            href={`/services/${service.name}`}
                            className={`${index == 1 ? 'secondary-bg' : 'bg-white'} text-black w-[9rem] h-[3.5rem] flex items-center justify-center rounded-xl gap-2 mt-8 md:mt-0`}>
                            <p className="text-center">Learn More</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-2">
                                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
                        </Link>
                    </div>
                    <figure className="image-wrapper relative w-80 h-56 md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-full">
                        <Image
                            src={service.image}
                            fill
                            className="object-cover"
                        />
                    </figure>
                </div>
            )
        }
    })

    return (
        <section className="w-screen min-h-screen bg-white lg:pt-20 pt-20 pb-32">
            {displayData}
        </section>
    )
}
export default ServicesSection
