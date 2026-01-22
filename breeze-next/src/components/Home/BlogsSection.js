'use client'

import { useBlog } from '@/hooks/blog'
import Blog from './Blog'

const BlogsSection = () => {
    return (
        <div className="w-screen min-h-screen bg-white pt-10">
            <h1 className="text-3xl lg:text-5xl text-center">
                News & Articles
            </h1>
            <h2
                className="text-center  lg:text-[1rem] lg:px-[24rem] lg:mt-3"
                style={{ fontFamily: 'var(--font-inter)' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </h2>
            <div className="blogs-wrapper flex gap-5 justify-center mt-10 flex-wrap">
                <Blog />
            </div>
        </div>
    )
}
export default BlogsSection
