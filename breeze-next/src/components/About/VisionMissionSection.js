const VisionMissionSection = () => {
    return (
        <section className="w-screen min-h-screen bg-white grid grid-cols-1 pb-32 md:gap-2 md:grid-cols-2 md:min-h-full pt-20 lg:min-h-screen lg:gap-7 px-3 lg:px-12">
            <div className="flex flex-col justify-between pt-12">
                <h2 className="text-5xl text-center md:text-left font-bold px-8 lg:px-0 ">
                    Vision & Mission
                </h2>
                <p className=" text-center md:text-left mt-5 px-8 lg:px-0 lg:pe-8 text-black">
                    The principles that guide our brand in creating meaningful
                    products, building trust, and delivering lasting value.
                </p>
                <div
                    className="card w-full h-96 mx-auto px-5 py-5 md:mt-32 lg:w-full lg:h-[20rem] flex flex-col justify-between mt-10"
                    style={{ backgroundColor: 'var(--color-primary)' }}>
                    <h3 className="text-6xl font-bold text-white">Vision</h3>
                    <p className="mt-12 text-xl text-white">
                        To be Indonesia's most trusted regulatory consulting
                        partner, recognized for delivering sustainable
                        compliance solutions that enable our clients to achieve
                        long-term growth and operate with confidence in an
                        ever-evolving regulatory landscape.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div
                    className="card w-full h-[30rem] mx-auto px-5 py-5 md:w-full md:h-full lg:w-full lg:h-full flex flex-col justify-between "
                    style={{ backgroundColor: 'var(--color-primary)' }}>
                    <h3 className="text-6xl font-bold text-white">Mission</h3>
                    <p className="text-white mt-32 text-xl md:mt-[16.5rem] md:text-2xl lg:mt-44 ms-4">
                        To empower businesses and individuals by simplifying
                        complex regulatory processes. We provide comprehensive
                        consulting services in land administration, licensing,
                        and certification, ensuring full compliance with
                        Indonesian regulations while maintaining efficiency and
                        accuracy.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default VisionMissionSection
