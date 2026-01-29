'use client'

import Image from 'next/image'
import Logo from '../../public/assets/logo.png'
import Link from 'next/link'
import { MapPreview } from './Map'
import { useAuth } from '@/hooks/auth'

const Footer = () => {
    const { user } = useAuth({ middleware: 'guest' })

    const links = [
        {
            text: 'About Us',
            link: '/about',
        },
        {
            text: 'AOur Services',
            link: '/services',
        },
        {
            text: 'Contact',
            link: '/about',
        },
        {
            text: 'News & Articles',
            link: '/blogs',
        },
    ]

    const services = [
        'Land Certification & Permitting',
        'Architectural & Construction Licensing',
        'ISO 22000 Certification Assistance',
        'Halal Certification Services',
    ]

    if (!user)
        return (
            <footer className="w-screen lg:h-96 bg-[#0A1F2E] grid lg:grid-cols-5 grid-cols-1  md:grid-cols-3 gap-5 lg:px-20 px-10 md:py-12 text-white ">
                <div>
                    <figure className="relative w-32 h-12">
                        <Image src={Logo} fill className="object-contain" />
                    </figure>
                    <p className="text-xs mt-6">
                        Your trusted partner in legal, licensing, and
                        certification solutions.
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                        <Link href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-6">
                                <path
                                    fill="#DFAE74"
                                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"
                                />
                            </svg>
                        </Link>
                        <Link href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="w-6">
                                <path
                                    fill="#DFAE74"
                                    d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                        </Link>
                        <Link href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                className="w-6">
                                <path
                                    fill="#DFAE74"
                                    d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <h2>Quick Links</h2>
                    <ul>
                        {links.map((link, index) => (
                            <li className="mt-5 text-[0.8rem]">
                                <Link href={`${link.link}`}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 md:mt-0">
                    <h2>Services</h2>
                    <ul>
                        {services.map((service, index) => (
                            <li className="mt-5 text-[0.8rem]">
                                <Link href={`/services/${service}`}>
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 lg:mt-0">
                    <h2>Contact Us</h2>
                    <div className="mt-5 flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4">
                            <path
                                fill="#DFAE74"
                                d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                            />
                        </svg>
                        <p>email@gmail.com</p>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4">
                            <path
                                fill="#DFAE74"
                                d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                            />
                        </svg>
                        <p>(+62) 00000000</p>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className="w-4">
                            <path
                                fill="#DFAE74"
                                d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                            />
                        </svg>
                        <p>(+62) 00000000</p>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0">
                    <h2>Our Location</h2>
                    <div className="w-[15rem] mt-3">
                        <MapPreview
                            url="https://maps.app.goo.gl/jXQAS62Pa4XdSJB8A"
                            height="160px"
                            borderRadius="12px"
                            style={{
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </div>
                </div>
            </footer>
        )
}

export default Footer
