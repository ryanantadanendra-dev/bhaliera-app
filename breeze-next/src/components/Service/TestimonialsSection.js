import Image from 'next/image'

const TestimoialsSection = ({ service }) => {
    return (
        <div className="w-screen min-h-screen pt-12">
            <h1 className="text-center text-5xl font-bold">What Others Say?</h1>
            <div className="cards-wrapper w-screen flex justify-center flex-wrap gap-12 pt-20">
                {service[0]?.testimonials?.map((data, index) => (
                    <div className="card w-64 h-96 bg-white">
                        <div className="relative w-44 h-44 mx-auto">
                            <Image
                                src={data.image}
                                fill
                                className="object-cover rounded-full"
                            />
                        </div>
                        <h1 className="mt-12 font-bold text-2xl text-center">
                            {data.name}
                        </h1>
                        <p className="text-center">{data.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TestimoialsSection
