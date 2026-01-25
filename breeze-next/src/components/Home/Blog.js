import { useBlog } from '@/hooks/blog'
import Image from 'next/image'

const Blog = () => {
    const { latests } = useBlog()

    console.log(latests)

    return (
        <>
            {latests?.blogs?.map((latest, index) => (
                <div className="card-container w-[23rem] min-h-[33rem] primary-bg text-white flex flex-col justify-around rounded-xl">
                    <figure className="relative w-full h-40">
                        <Image
                            src={`http://localhost:8000/${latest.image}`}
                            fill
                            className="object-contain"
                        />
                    </figure>
                    <div>
                        <h3 className="ms-4  text-3xl font-bold">
                            {latest.title}
                        </h3>
                        <p className="ms-4 mt-4">{latest.subtitle}</p>
                    </div>
                    <div>
                        <button className="px-5 py-3 bg-transparent border-2 border-[#dfae74] ms-4 mt- rounded-3xl">
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

export default Blog
