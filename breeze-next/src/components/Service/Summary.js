import Image from 'next/image'

const Summary = ({ service }) => {
    return (
        <section className="w-screen min-h-screen lg:pt-32 pt-32 md:min-h-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:px-56">
                {`${service[0]?.name}`} Services
            </h2>
            <div className="content-wrapper flex flex-col-reverse items-center md:items-start lg:items-start md:mt-20 md:flex-row-reverse pt-12 md:px-5 md:pt-0 md:gap-10 lg:px-32 lg:gap-10">
                <div className="md:w-1/2md:h-full lg:py-7 py-7 lg:px-5 px-5 primary-bg text-white">
                    <h2 className="font-bold lg:text-2xl">
                        Our Service Includes
                    </h2>
                    <ul className="lg:mt-4 mt-4">
                        {service[0]?.offers.map(offer => (
                            <li
                                key={index}
                                className="flex items-center gap-1 lg:mt-3 mt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4">
                                    <path
                                        fill="#dfae74"
                                        d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416zm70.7 121.9c7.8-10.7 22.8-13.1 33.5-5.3 10.7 7.8 13.1 22.8 5.3 33.5L243.4 366.1c-4.1 5.7-10.5 9.3-17.5 9.8-7 .5-13.9-2-18.8-6.9l-55.9-55.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l36 36 105.6-145.2z"
                                    />
                                </svg>
                                {offer}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" px-10 md:px-0 mt-5 md:mt-0 md:w-1/2 pb-8">
                    <p className="md:mt-0 lg:text-[1.2rem] whitespace-pre-line">
                        {service[0].summary}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Summary
