const VisionMissionSection = () => {
    return (
        <section className="w-screen min-h-screen bg-white grid grid-cols-1 pb-32 md:gap-2 md:grid-cols-2 md:min-h-full pt-20 lg:min-h-screen lg:gap-7 px-3 lg:px-12">
            <div className="flex flex-col justify-between pt-12">
                <h2 className="text-5xl text-center md:text-left font-bold px-8 lg:px-0 ">
                    Vision & Mission
                </h2>
                <p className=" text-center md:text-left mt-5 px-8 lg:px-0 lg:pe-8">
                    The principles that guide our brand in creating meaningful
                    products, building trust, and delivering lasting value.
                </p>
                <div className="card w-full h-96 primary-bg mx-auto text-white px-5 py-5 md:mt-32 lg:w-full lg:h-[20rem] flex flex-col justify-between mt-10">
                    <h3 className="text-6xl font-bold">Vision</h3>
                    <p className="mt-12 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <div className="card w-96 h-[30rem] mx-auto primary-bg text-white px-5 py-5 md:w-full md:h-full lg:w-full lg:h-full flex flex-col justify-between ">
                    <h3 className="text-6xl font-bold">Mission</h3>
                    <ul className="mt-32 list-disc text-xl md:mt-[16.5rem] md:text-2xl lg:mt-44 ms-4">
                        <li className="mt-2">Lorem ipsum dolor</li>
                        <li className="mt-2">sit amet, consectetur</li>
                        <li className="mt-2">adipiscing elit, sed</li>
                        <li className="mt-2">do eiusmod tempor incididunt</li>
                        <li className="mt-2">do eiusmod tempor incididunt</li>
                        <li className="mt-2">ut labore et dolore magna</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default VisionMissionSection
