import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('../Carousel'), {
    ssr: false,
    loading: () => <div className="h-52" />,
})

const HighlightBlogs = dynamic(() => import('./HighlightBlogs'), {
    ssr: false,
    loading: () => <div className="h-56" />,
})

const BlogsSection = () => {
    return (
        <section className="w-screen min-h-full md:min-h-full bg-white overflow-hidden pb-12">
            <HighlightBlogs />
            <Carousel />
        </section>
    )
}
export default BlogsSection
