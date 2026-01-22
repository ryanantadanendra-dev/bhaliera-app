import Card from './Card'

const ServicesSection = () => {
    return (
        <div className="minh-screen w-screen bg-white pb-32 lg:pt-10">
            <h1 className="text-3xl text-center lg:text-5xl">Our Services</h1>
            <h2 className="text-center lg:text-[1rem] lg:px-[24rem]">
                BHALIERA offers comprehensive regulatory and compliance services
                designed to simplify complex legal and administrative processes
                for individuals and businesses.
            </h2>
            <div className="cards-wrapper flex justify-center flex-wrap gap-5 lg:mt-10">
                <Card />
            </div>
        </div>
    )
}

export default ServicesSection
