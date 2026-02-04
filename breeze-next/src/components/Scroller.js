'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const Scroller = () => {
    const params = useSearchParams()

    useEffect(() => {
        const id = params.get('scroll')
        if (!id) return

        const e = document.getElementById(id)
        if (e) {
            e.scrollIntoView({ behavior: 'smooth' })
            window.history.replaceState({}, '', '/')
        }
    }, [params])

    return null
}
export default Scroller
