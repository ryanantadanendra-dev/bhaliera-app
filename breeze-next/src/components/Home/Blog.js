import { useBlog } from '@/hooks/blog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

const Blog = () => {
    const { latests } = useBlog()
    const [extend, setExtend] = useState(false)

    return (
        <>
            {latests?.data?.length > 0 ? (
                latests?.data?.map((latest, index) => (
                    <div
                        key={index}
                        className="card-container w-[23rem] min-h-[33rem] primary-bg text-white flex flex-col justify-around rounded-xl py-2">
                        <figure className="relative w-[20rem] h-56 mx-auto">
                            <Image
                                src={`http://localhost:8000/${latest.image}`}
                                alt={`${latest?.title} image`}
                                fill
                                sizes="100px"
                                className="object-cover"
                            />
                        </figure>
                        <div>
                            <h3
                                onClick={e => {
                                    if (
                                        e.currentTarget.classList.contains(
                                            'truncate',
                                        )
                                    ) {
                                        e.currentTarget.classList.remove(
                                            'truncate',
                                        )
                                    } else {
                                        e.currentTarget.classList.add(
                                            'truncate',
                                        )
                                    }
                                }}
                                className={`ms-4  text-3xl font-bold ${extend ? '' : 'truncate'} cursor-pointer`}>
                                {latest.title}
                            </h3>
                            <p className="ms-4 mt-4">{latest.subtitle}</p>
                        </div>
                        <div>
                            <button className="px-5 py-3 bg-transparent border-2 border-[#dfae74] ms-4 mt- rounded-3xl">
                                <Link
                                    href={`/blog/${slugify(latest.title)}`}
                                    className="flex gap-3">
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
                                </Link>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">No Blogs Yet!</p>
            )}
        </>
    )
}

export default Blog
