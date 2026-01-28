'use client'

import { useBlog } from '@/hooks/blog'
import Image from 'next/image'
import Link from 'next/link'

const HighlightBlogs = () => {
    const { blogs } = useBlog()

    const displayFirst = blogs?.blogs?.map((blog, index) => {
        if (index !== 0 && index !== 1) return

        return (
            <figure
                key={index}
                className={`${index == 0 ? 'lg:w-[37rem] md:w-[30rem] w-96 md:flex-1' : 'lg:w-[20rem] md:w-[15rem] w-96'} h-56 primary-bg relative`}>
                <Image
                    src={`http://localhost:8000/${blog.image}`}
                    fill
                    className="object-contain"
                />
                <figcaption className=" text-white absolute z-50 bottom-0 px-5 bg-[#00000050] w-full h-16 flex justify-between items-center gap-2">
                    <h3 className="text-2xl flex-1 truncate">{blog.title}</h3>
                    <Link
                        href=""
                        className="shrink-0 text-blue-300 underline text-xs">
                        {' '}
                        Learn More
                        {`${' >>>'}`}
                    </Link>
                </figcaption>
            </figure>
        )
    })

    return (
        <div className="blogs-wrapper flex md:flex-row flex-col items-center justify-center gap-3 pt-12 px-20">
            {displayFirst}
        </div>
    )
}

export default HighlightBlogs
