import Image from 'next/image'
import Link from 'next/link'
import BlogSkeleton from './BlogSkeleton'
import { useBlogPublic } from '@/hooks/blogPublig'

// Move slugify outside or use a library to avoid re-allocation on render
function slugify(text) {
    return text
        ?.toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

const Blog = () => {
    const { latests, isLoading } = useBlogPublic()

    if (isLoading) return <BlogSkeleton />

    return (
        <>
            {latests?.data?.length > 0 ? (
                latests.data.map((latest, index) => (
                    <article
                        key={latest.id}
                        className="card-container w-[23rem] min-h-[33rem] text-white flex flex-col justify-around rounded-xl py-4 shadow-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        <figure className="relative w-[20rem] h-56 mx-auto overflow-hidden rounded-lg">
                            <Image
                                src={latest?.image}
                                alt={latest.title} // Keep it concise
                                fill
                                // Refined sizes based on your 20rem (320px) figure
                                sizes="(max-width: 768px) 320px, 320px"
                                quality={75}
                                // Don't lazy load the first 2 images to help LCP
                                priority={index < 2}
                                loading={index < 2 ? 'eager' : 'lazy'}
                                className="object-cover transition-transform hover:scale-105"
                            />
                        </figure>

                        <div className="px-6">
                            <h3 className="text-3xl font-bold truncate hover:text-clip cursor-pointer text-white">
                                {latest.title}
                            </h3>
                            <p className="mt-4 text-gray-300 line-clamp-2">
                                {latest.subtitle}
                            </p>
                        </div>

                        <div className="px-6">
                            <Link
                                href={`/blog/${slugify(latest.title)}`}
                                className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#dfae74] rounded-full text-[#dfae74] hover:bg-[#dfae74] hover:text-white transition-all group"
                                aria-label={`Read more about ${latest.title}`}>
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    className="w-4 transition-transform group-hover:rotate-45"
                                    fill="currentColor">
                                    <path d="M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                                </svg>
                            </Link>
                        </div>
                    </article>
                ))
            ) : (
                <div className="w-full text-center py-10">
                    <p className="text-xl">No Blogs Yet!</p>
                </div>
            )}
        </>
    )
}

export default Blog
