'use client'

import Blog from './Blog'
import Pattern from '../../../public/assets/pattern.png'
import Image from 'next/image'

const BlogsSection = () => {
    return (
        <section className="w-full min-h-screen md:min-h-full bg-white py-10 relative overflow-hidden">
            <div className="absolute -top-20">
                <figure className="relative w-52 h-44  md:w-96 md:h-72">
                    <Image
                        src={Pattern}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        fill
                        sizes="(max-width: 768px) 160px, 384px"
                        className="object-cover opacity-30"
                    />
                </figure>
            </div>
            <h2 className="text-3xl lg:text-5xl text-center">
                News & Articles
            </h2>
            <p
                className="text-center  lg:text-xl lg:px-[24rem] lg:mt-3"
                style={{
                    fontFamily: 'var(--font-inter)',
                    color: 'var(--color-primary)',
                }}>
                Stories that matter, updates that move
            </p>
            <div className="blogs-wrapper flex gap-5 justify-center mt-10 flex-wrap">
                <Blog />
            </div>
        </section>
    )
}
export default BlogsSection
