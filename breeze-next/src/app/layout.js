// app/layout.jsx
import { Playfair_Display, Inter } from 'next/font/google'
import '@/app/global.css'
import dynamic from 'next/dynamic'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', '-apple-system', 'sans-serif'],
    variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'], // Remove '600' if not used
    display: 'swap',
    fallback: ['Georgia', 'serif'],
    variable: '--font-playfair-display',
})

// Lazy load analytics
const Analytics = dynamic(() => import('@/components/Analytics'), {
    ssr: false,
})

export const metadata = {
    metadataBase: new URL('https://bhaliera.com'),
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="id"
            className={`${playfairDisplay.variable} ${inter.variable}`}
            suppressHydrationWarning>
            <head>
                {/* Preconnect to external domains */}
                <link
                    rel="preconnect"
                    href="https://www.googletagmanager.com"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.googletagmanager.com"
                />
            </head>
            <body className="antialiased font-sans">
                {children}
                <Analytics />
            </body>
        </html>
    )
}
