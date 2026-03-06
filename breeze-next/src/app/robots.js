export default function robots() {
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
