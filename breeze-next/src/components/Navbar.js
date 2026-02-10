'use client'

import Logo from '../../public/assets/logo.png'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react'
import Hamburger from './Hamburger'
import { useRouter } from 'next/navigation'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

// Menu icon component
const MenuIcon = ({ onClick }) => (
    <button
        onClick={onClick}
        aria-label="Open navigation menu"
        aria-expanded="false"
        className="p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        type="button">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6"
            aria-hidden="true">
            <path
                fill="#FFFF"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
        </svg>
    </button>
)

// Dropdown chevron icon
const ChevronIcon = ({ isOpen }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        className={`w-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true">
        <path
            fill="#ffffff"
            d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"
        />
    </svg>
)

const SERVICES = [
    'Land Certification & Permitting',
    'Architectural & Construction Licensing',
    'ISO 22000 Certification Assistance',
    'Halal Certification Services',
]

const Navbar = () => {
    const isMobile = useIsMobile(1024)
    const [isOpen, setIsOpen] = useState(false)
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
    const router = useRouter()

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = event => {
            if (
                isDesktopMenuOpen &&
                !event.target.closest('.services-dropdown')
            ) {
                setIsDesktopMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [isDesktopMenuOpen])

    // Close dropdown on Escape key
    useEffect(() => {
        const handleEscape = event => {
            if (event.key === 'Escape' && isDesktopMenuOpen) {
                setIsDesktopMenuOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isDesktopMenuOpen])

    const goToSection = useCallback(
        (page, id) => {
            router.push(`/${page}/?scroll=${id}`)
        },
        [router],
    )

    const handleServiceClick = useCallback(
        service => {
            goToSection('services', slugify(service))
            setIsDesktopMenuOpen(false)
        },
        [goToSection],
    )

    const toggleDesktopMenu = useCallback(() => {
        setIsDesktopMenuOpen(prev => !prev)
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return (
        <nav
            className="fixed top-0 flex justify-between items-center w-screen h-20 px-6 z-50"
            style={{ backgroundColor: 'var(--color-primary)' }}
            aria-label="Main navigation">
            {/* Logo */}
            <div className="nav-wrapper w-32 h-full">
                <Link
                    href="/"
                    className="relative block w-full h-full"
                    aria-label="Go to homepage">
                    <Image
                        src={Logo}
                        alt="Company logo"
                        fill
                        sizes="(max-width: 1024px) 128px, 160px"
                        priority
                        className="object-contain"
                    />
                </Link>
            </div>

            {/* Mobile Menu Button */}
            {isMobile ? (
                <MenuIcon onClick={toggleMobileMenu} />
            ) : (
                // Desktop Navigation
                <div className="links-wrapper">
                    <ul className="flex gap-6 items-center">
                        <li>
                            <Link
                                href="/about"
                                className="text-white hover:text-[#DFAE74] transition-colors">
                                About
                            </Link>
                        </li>
                        <li className="services-dropdown">
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/services"
                                    className="text-white hover:text-[#DFAE74] transition-colors">
                                    Services
                                </Link>
                                <button
                                    onClick={toggleDesktopMenu}
                                    aria-label="Toggle services menu"
                                    aria-expanded={isDesktopMenuOpen}
                                    aria-haspopup="true"
                                    className="p-1"
                                    type="button">
                                    <ChevronIcon isOpen={isDesktopMenuOpen} />
                                </button>
                            </div>

                            {/* Dropdown Menu */}
                            <div
                                className={`
                                    extended-menu top-16 w-screen left-0
                                    absolute transition-all duration-200 ease-out
                                    ${
                                        isDesktopMenuOpen
                                            ? 'visible opacity-100 h-auto'
                                            : 'invisible opacity-0 h-0 overflow-hidden'
                                    }
                                `}
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                }}
                                role="menu"
                                aria-label="Services submenu">
                                <ul>
                                    {SERVICES.map((service, index) => (
                                        <li
                                            key={index}
                                            className="h-[44.8px] text-white hover:bg-white hover:text-black flex items-center px-6 transition-colors"
                                            role="none">
                                            <button
                                                onClick={() =>
                                                    handleServiceClick(service)
                                                }
                                                className="w-full text-left"
                                                type="button"
                                                role="menuitem">
                                                {service}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-white hover:text-[#DFAE74] transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blogs"
                                className="text-white hover:text-[#DFAE74] transition-colors">
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Mobile Hamburger Menu */}
            <Hamburger
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                goToSection={goToSection}
                slugify={slugify}
            />
        </nav>
    )
}

export default Navbar
