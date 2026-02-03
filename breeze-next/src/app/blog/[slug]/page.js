import BlogClient from '@/components/Blogs/BlogClient'
import { getBlogs } from '@/lib/getBlog'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

export async function generateMetadata({ params }) {
    const { blogs } = await getBlogs()

    const blog = blogs.find(b => slugify(b.title) === params.slug)

    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog does not exist.',
        }
    }

    return {
        title: `${blog.title} | Bhaliera Blog`,
        description: blog.subtitle,
        openGraph: {
            title: blog.title,
            description: blog.subtitle,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.title,
            description: blog.subtitle,
        },
    }
}

const Blog = ({ params }) => {
    return <BlogClient slug={params.slug} />
}
export default Blog
