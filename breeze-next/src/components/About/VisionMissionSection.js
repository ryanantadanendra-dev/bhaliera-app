const VisionMissionSection = () => {
    return (
        <div className="w-screen min-h-screen bg-white grid grid-cols-1 pb-32 md:grid-cols-2 md:min-h-0 pt-20 lg:min-h-screen lg:gap-7 lg:px-12">
            <div>
                <h1 className="text-5xl text-center md:text-left font-bold px-8 lg:px-0">
                    Vision & Mission
                </h1>
                <h2 className=" text-center md:text-left mt-5 px-8 lg:px-0 lg:pe-8">
                    The principles that guide our brand in creating meaningful
                    products, building trust, and delivering lasting value.
                </h2>
                <div className="card w-96 h-96 primary-bg mx-auto mt-8 text-white px-5 py-5 md:mt-32 lg:w-full lg:h-[20rem] flex flex-col justify-between">
                    <h1 className="text-6xl font-bold">Vision</h1>
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
                <div className="card w-96 h-[30rem] mx-auto primary-bg text-white px-5 py-5 md:h-[41.3rem] lg:w-full lg:h-[32.8rem] flex flex-col justify-between ">
                    <h1 className="text-6xl font-bold">Mission</h1>
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
        </div>
    )
}
export default VisionMissionSection
