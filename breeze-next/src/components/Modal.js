'use client'

import { useEffect, useState, useRef } from 'react'

const Modal = ({ children, open, setIsOpen }) => {
    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const overlayRef = useRef(null)

    return (
        <div
            onClick={() => setIsOpen(false)}
            className={`overlay bg-[#00000050] w-screen h-screen ${open ? `opacity-100 pointer-events-auto` : `opacity-0 pointer-events-none`} fixed top-0 left-0 transition-all duration-200 ease-out overflow-x-hidden`}>
            <div className="modal-container w-screen h-screen flex justify-center items-center">
                <div
                    onClick={e => e.stopPropagation()}
                    className="md:w-[40rem] md:h-[35rem] w-[23rem] h-[30rem] pb-12 bg-white rounded-xl">
                    <svg
                        onClick={() => {
                            setIsOpen(false)
                            // setPreview(null)
                        }}
                        className="w-6 ms-auto me-6 mt-6 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm71 135c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z" />
                    </svg>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal
