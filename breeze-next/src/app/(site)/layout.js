// app/(user)/layout.jsx
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar'), {
    ssr: true,
})

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: false,
    loading: () => <div className="h-64" />,
})

const Chatty = dynamic(() => import('@/components/Chatty'), {
    ssr: false,
    loading: () => null,
})

const Analytics = dynamic(() => import('@/components/Analytics'), {
    ssr: false,
})

export default function UserLayout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>{children}</main>

            <Footer />
            <Chatty />
            <Analytics />
        </>
    )
}
