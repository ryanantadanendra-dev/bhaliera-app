import { Playfair_Display, Inter } from 'next/font/google'

import '@/app/global.css'
import Navbar from '@/components/Navbar'
import Chatty from '@/components/Chatty'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-playfair-display',
})

const RootLayout = ({ children }) => {
    const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

    return (
        <html
            lang="en"
            className={`${playfairDisplay.variable} ${inter.variable}`}>
            <body
                className={`antialiased ${playfairDisplay.variable} ${inter.variable}`}>
                <header>
                    <Navbar />
                </header>
                {children}
                <Chatty />
                <Footer />

                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=GA-ID"
                    strategy="afterInteractive"
                />

                <Script id="ga-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA-ID');
          `}
                </Script>
            </body>
        </html>
    )
}

export default RootLayout
