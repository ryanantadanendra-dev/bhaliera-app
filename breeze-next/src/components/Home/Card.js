import services from '@/services.json'
import Image from 'next/image'

const Card = () => {
    return (
        <>
            {services?.services?.map((service, index) => (
                <div
                    key={index}
                    className="card-container w-[20rem] md:w-[20rem] lg:w-[23rem] primary-bg text-white flex flex-col justify-between pb-10">
                    <div>
                        <figure className="image-wrapper relative w-40 h-40 lg:w-56 lg:h-56 md:w-48 md:h-48 mx-auto">
                            <Image
                                src={service.icon}
                                fill
                                className="object-cover"
                            />
                        </figure>
                        <h3 className="font-bold ms-8 text-lg">
                            {service.name}
                        </h3>
                        <ul className="ms-8 mt-4 pe-4 md:pe-4">
                            {service.offers?.map((offer, index) => (
                                <li
                                    key={index}
                                    className="list-disc mt-2 text-xs">
                                    {offer}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button className="px-5 py-3 bg-transparent border-2 border-[#dfae74] ms-8 mt-12 rounded-3xl">
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
                    </div>
                </div>
            ))}
        </>
    )
}
export default Card
