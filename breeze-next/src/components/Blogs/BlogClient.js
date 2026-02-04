'use client'

import { useBlog } from '@/hooks/blog'
import Image from 'next/image'

const BlogClient = ({ slug }) => {
    const { blogs } = useBlog()

    // const blog = blogs?.blogs.find(blog => blog.slug == slug)

    const blog = blogs?.blogs.find(
        b => b.title.toLowerCase().replace(/\s+/g, '-') === slug,
    )

    const formatedDate = new Date(blog?.created_at).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        },
    )

    return (
        <article className="w-screen min-h-screen py-28">
            <header>
                <h1 className="text-4xl md:text-5xl text-white text-center font-bold">
                    {blog?.title}
                </h1>
                <p className="text-center text-[#ffffff90] text-xl md:text-2xl mt-3">
                    {blog?.subtitle}
                </p>
                <time className="block text-center text-gray-400 text-[1rem] mt-10">
                    {formatedDate}
                </time>
            </header>
            <figure className="relative w-[20rem] md:w-[45rem] lg:w-[59rem] h-64 mx-auto mt-10">
                <Image
                    src={`http://localhost:8000/${blog?.image}`}
                    alt={`${blog?.title} image`}
                    fill
                    sizes="100px"
                    priority
                    className="object-cover"
                />
            </figure>
            <div
                dangerouslySetInnerHTML={{ __html: blog?.content }}
                className="content max-w-full px-8 md:px-12 lg:px-0"
            />
        </article>
    )
}
export default BlogClient
