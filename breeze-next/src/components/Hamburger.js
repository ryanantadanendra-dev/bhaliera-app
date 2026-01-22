import Link from 'next/link'
import { useEffect, useState } from 'react'

const Hamburger = ({ isOpen, setIsOpen }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isExtended, setIsExtended] = useState(false)

    useEffect(() => {
        if (!isOpen) {
            setIsExtended(false)
        }
    }, [isOpen])

    return (
        <div
            className={`menu-wrapper w-screen ${isExtended ? 'h-[358.4px]' : 'h-[179.2px]'} absolute bg-[#0f2742] ${isOpen ? 'top-20' : '-top-96'} left-0`}>
            <div className="link-wrapper">
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link href="" className="ms-3">
                        About Us
                    </Link>
                </div>
                <div
                    className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center gap-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Link href="" className="ms-3">
                        Services
                    </Link>
                    <svg
                        onClick={() => setIsExtended(!isExtended)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-3">
                        <path
                            fill={`${isHovered ? '#000000' : '#FFFFFF'}`}
                            d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"
                        />
                    </svg>
                </div>
                {isExtended && (
                    <div className="extended-menu">
                        <div
                            className={`link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center`}>
                            <Link href="" className="ms-3">
                                Land Certification & Permitting
                            </Link>
                        </div>
                        <div
                            className={`link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center`}>
                            <Link href="" className="ms-3">
                                Architectural & Construction Licensing
                            </Link>
                        </div>
                        <div
                            className={`link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center`}>
                            <Link href="" className="ms-3">
                                ISO 22000 Certification Assistance (Food Safety
                                Management System)
                            </Link>
                        </div>
                        <div
                            className={`link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center`}>
                            <Link href="" className="ms-3">
                                Halal Certification Services
                            </Link>
                        </div>
                    </div>
                )}
                <div
                    className={`link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center`}>
                    <Link href="" className="ms-3">
                        Articles
                    </Link>
                </div>
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link href="" className="ms-3">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
