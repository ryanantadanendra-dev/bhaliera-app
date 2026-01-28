'use client'

import Logo from '../../public/assets/logo.png'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import Link from 'next/link'
import { useState } from 'react'
import Hamburger from './Hamburger'
import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'

const Navbar = () => {
    const isMobile = useIsMobile(1024)
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth({ middleware: 'guest' })

    if (!user) {
        return (
            <nav className=" fixed top-0 flex justify-between items-center w-screen h-20 primary-bg px-6 z-50">
                <figure className="nav-wrapper relative w-32 h-full">
                    <Image src={Logo} fill className="object-contain" />
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
                        <Link href="/about" className="text-white">
                            About
                        </Link>
                    </div>
                )}
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            </nav>
        )
    }
}
export default Navbar
