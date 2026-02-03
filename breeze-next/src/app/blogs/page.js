import Hero from '@/components/Hero'
import BlogsSection from '@/components/Blogs/BlogsSection'

export const metadata = {
    title: 'Business & Certification Blog - Bhaliera.com',
    description:
        'Guides and insights on land certification, construction licensing, ISO 22000, and halal certification in Bali & Indonesia.',
    keywords: [
        'business certification Indonesia',
        'compliance guide Bali',
        'legal consulting Indonesia',
        'land certification Indonesia',
        'construction licensing Indonesia',
        'architectural permits Bali',
        'ISO 22000 certification',
        'food safety compliance Indonesia',
        'halal certification Indonesia',
        'BPJPH halal registration',
        'corporate compliance Bali',
        'business licensing Indonesia',
    ],
    openGraph: {
        title: 'Bhaliera Blog | Legal & Certification Insights',
        description:
            'Learn about business compliance, halal certification, ISO standards, and construction permits in Indonesia.',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bhaliera Blog',
        description:
            'Your source for certification, licensing, and compliance guides in Indonesia.',
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
}

const Blogs = () => {
    return (
        <>
            <Hero title="News & Articles" />
            <BlogsSection />
        </>
    )
}
export default Blogs
