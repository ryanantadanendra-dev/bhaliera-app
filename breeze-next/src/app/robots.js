export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/dashboard/', '/login'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/dashboard/', '/login'],
            },
        ],
        sitemap: `https://bhaliera.com/sitemap.xml`,
    }
}
