'use client'

import Logo from '../../public/assets/logo.png'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import Link from 'next/link'
import { useState } from 'react'
import Hamburger from './Hamburger'
import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import { useRouter } from 'next/navigation'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

const Navbar = () => {
    const isMobile = useIsMobile(1024)
    const [isOpen, setIsOpen] = useState(false)
    const [isDesktopMenuOpen, setIssDesktopMenuOpen] = useState(false)
    const { user } = useAuth({ middleware: 'guest' })
    const router = useRouter()

    const goToSection = async (page, id) => {
        router.push(`/${page}/?scroll=` + id)
    }

    if (!user) {
        return (
            <nav className="fixed top-0 flex justify-between items-center w-screen h-20 primary-bg px-6 z-50">
                <figure className="nav-wrapper w-32 h-full">
                    <Link href="/" className="relative block w-full h-full">
                        <Image
                            src={Logo}
                            alt="Logo"
                            fill
                            sizes="100px"
                            priority
                            className="object-contain"
                        />
                    </Link>
                </figure>
                {isMobile ? (
                    <svg
                        onClick={() => setIsOpen(!isOpen)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5">
                        <path
                            fill="#FFFF"
                            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
                        />
                    </svg>
                ) : (
                    <div className="links-wrapper">
                        <ul className="flex gap-4">
                            <li>
                                <Link href="/about" className="text-white">
                                    About
                                </Link>
                            </li>
                            <li className="flex items-center gap-1">
                                <Link href="/services" className="text-white">
                                    Services
                                </Link>
                                <svg
                                    onClick={() =>
                                        setIssDesktopMenuOpen(
                                            !isDesktopMenuOpen,
                                        )
                                    }
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    className="w-2">
                                    <path
                                        fill="#ffffff"
                                        d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"
                                    />
                                </svg>
                                <div
                                    className={`extended-menu primary-bg left-0 top-20 w-screen ${!isDesktopMenuOpen ? 'invisible opacity-0' : 'visited: opacity-100'} ${!isDesktopMenuOpen && isMobile ? 'h-0' : 'h-[179.2px]'} absolute transition-all duration-200 ease-out`}>
                                    <ul>
                                        <li className="h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                                            <button
                                                onClick={() => {
                                                    goToSection(
                                                        'services',
                                                        slugify(
                                                            'Land Certification & Permitting',
                                                        ),
                                                    )
                                                    setIssDesktopMenuOpen(false)
                                                }}
                                                className="w-full text-left">
                                                Land Certification & Permitting
                                            </button>
                                        </li>
                                        <li className="h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                                            <button
                                                onClick={() => {
                                                    goToSection(
                                                        'services',
                                                        slugify(
                                                            'Architectural & Construction Licensing',
                                                        ),
                                                    )
                                                    setIssDesktopMenuOpen(false)
                                                }}
                                                className="w-full text-left">
                                                Architectural & Construction
                                                Licensing
                                            </button>
                                        </li>
                                        <li className="h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                                            <button
                                                onClick={() => {
                                                    goToSection(
                                                        'services',
                                                        slugify(
                                                            'ISO 22000 Certification Assistance',
                                                        ),
                                                    )
                                                    setIssDesktopMenuOpen(false)
                                                }}
                                                className="w-full text-left">
                                                ISO 22000 Certification
                                                Assistance
                                            </button>
                                        </li>
                                        <li className="h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                                            <button
                                                onClick={() => {
                                                    goToSection(
                                                        'services',
                                                        slugify(
                                                            'Halal Certification Services',
                                                        ),
                                                    )
                                                    setIssDesktopMenuOpen(false)
                                                }}
                                                className="w-full text-left">
                                                Halal Certification Services
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="text-white">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
                <Hamburger
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    goToSection={goToSection}
                    slugify={slugify}
                />
            </nav>
        )
    }
}
export default Navbar
