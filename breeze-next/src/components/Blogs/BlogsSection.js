import HighlightBlogs from './HighlightBlogs'
import Carousel from '../Carousel'

const BlogsSection = () => {
    return (
        <section className="w-screen min-h-screen md:min-h-full bg-white overflow-hidden pb-12">
            <HighlightBlogs />
            <Carousel />
        </section>
    )
}
export default BlogsSection
