import Card from './Card'

const ServicesSection = () => {
    return (
        <section className="minh-screen w-screen bg-white pb-32 pt-10">
            <h2 className="text-3xl text-center md:text-5xl">Our Services</h2>
            <p className="text-center lg:text-[1rem] mt-3 md:px-32 lg:px-[24rem]">
                BHALIERA offers comprehensive regulatory and compliance services
                designed to simplify complex legal and administrative processes
                for individuals and businesses.
            </p>
            <div className="cards-wrapper flex justify-center flex-wrap gap-5 mt-10">
                <Card />
            </div>
        </section>
    )
}

export default ServicesSection
