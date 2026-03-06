'use client'

import { useMemo } from 'react'
import { useBlogPublic } from '@/hooks/blogPublig'
import Image from 'next/image'
import Link from 'next/link'

export default function HighlightBlogs() {
    const { blogs } = useBlogPublic()

    const highlight = useMemo(() => {
        if (!blogs?.blogs) return []
        return blogs.blogs.slice(0, 2)
    }, [blogs])

    if (!highlight.length)
        return (
            <p className="text-black text-xl mt-12 text-center">
                No Blogs Yet!
            </p>
        )

    return (
        <div className="blogs-wrapper flex md:flex-row flex-col items-center justify-center gap-3 pt-12 px-6 md:px-20">
            {highlight.map((blog, index) => (
                <Link
                    href={`/blog/${blog?.slug}`}
                    key={blog?.slug || index}
                    aria-label={`Read Blog: ${blog?.title}`}
                    className={`relative h-56 aspect-[16/9] ${
                        index === 0
                            ? 'lg:w-[37rem] md:w-[30rem] w-96 md:flex-1'
                            : 'lg:w-[20rem] md:w-[15rem] w-96'
                    }`}
                    style={{ backgroundColor: 'var(--color-primary)' }}>
                    <Image
                        src={
                            typeof blog?.image === 'string' &&
                            blog?.image.length > 0
                                ? blog.image
                                : 'placeholder.jpg'
                        }
                        alt={`${blog?.title} image` ?? 'Blog Image'}
                        fill
                        priority={index === 0}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        sizes="(max-width: 768px) 90vw, 400px"
                        unoptimized={false}
                        className="object-cover"
                    />

                    <div className="absolute bottom-0 z-10 w-full h-16 px-5 bg-black/60 flex items-center justify-between gap-2">
                        <h3 className="text-white text-lg md:text-2xl flex-1 truncate">
                            {blog.title}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}
