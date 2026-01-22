import { Nunito, Playfair_Display, Inter } from 'next/font/google'

import '@/app/global.css'
import Navbar from '@/components/Navbar'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})
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
    return (
        <html
            lang="en"
            className={`${playfairDisplay.variable} ${inter.variable}`}>
            <body
                className={`antialiased ${playfairDisplay.variable} ${inter.variable}`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
