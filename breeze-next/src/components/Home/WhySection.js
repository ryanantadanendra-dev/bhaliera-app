const WhySection = () => {
    const datas = [
        'Multi-field expertise: legal, land, architecture, certification.',
        'Strong Regulatory Knowledge aligned with current government regulations',
        'Integrated One-stop compliance solutions for diverse business needs.',
        'Clear processes and transparent timelines.',
        'Broad professional network with government and certification agencies.',
    ]

    const displayData = datas.map((data, index) => (
        <div
            key={index}
            className="flex justify-between items-center mt-3 gap-5 bg-[#FFFFFF30] lg:h-14 px-4">
            <p className="text-xs lg:text-xl">{data}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5">
                <path
                    fill="#ffffff"
                    d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm41-159c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39-150.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80z"
                />
            </svg>
        </div>
    ))

    return (
        <section className="w-screen min-h-screen md:min-h-0 md:h-full lg:min-h-screen bg-primary flex flex-col md:flex-row py-5 md:gap-4 lg:gap-0">
            <div className="w-full md:w-1/2 h-3/4 md:h-full lg:h-screen secondary-bg lg:rounded-xl">
                <div>
                    <h2 className="text-5xl lg:text-6xl font-bold ms-4 mt-4">
                        Why us?
                    </h2>
                    <p className="ms-4 mt-4">
                        We combine regulatory expertise, professional integrity,
                        and a structured working approach to deliver reliable
                        and effective solutions.
                    </p>
                </div>
                <div className="mt-32">{displayData}</div>
            </div>
            <div className="w-full md:w-1/2 h-1/4 md:h-[450px] flex justify-center lg:ps-8">
                <iframe
                    className={`w-full h-[315px] mt-8 md:mt-0 md:h-full md:w-full lg:h-screen`}
                    src="https://www.youtube.com/embed/_Sl8diqCAFw?si=cxPiUOI8CBYTR74h"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default WhySection
