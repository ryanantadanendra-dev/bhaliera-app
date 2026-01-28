'use client'

import { useParams } from 'next/navigation'
import { useBlog } from '@/hooks/blog'
import Image from 'next/image'

const Blog = () => {
    const { slug } = useParams()
    const { blogs } = useBlog()

    const blog = blogs?.blogs.find(blog => blog.slug == slug)

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
        <article className="w-screen h-screen pt-28">
            <header>
                <h1 className="text-5xl text-white text-center font-bold">
                    {blog?.title}
                </h1>
                <p className="text-center text-[#ffffff90] text-2xl mt-3">
                    {blog?.subtitle}
                </p>
                <time className="block text-center text-gray-400 text-[1rem] mt-10">
                    {formatedDate}
                </time>
            </header>
            <figure className="relative lg:w-[59rem] h-64 mx-auto mt-10">
                <Image
                    src={`http://localhost:8000/${blog?.image}`}
                    fill
                    className="object-cover"
                />
            </figure>
            <div
                dangerouslySetInnerHTML={{ __html: blog?.content }}
                className="content"
            />
        </article>
    )
}
export default Blog
