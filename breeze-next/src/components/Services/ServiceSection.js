'use client'

import Scroller from '../Scroller'
import { useState, useMemo, useCallback } from 'react'
import services from '@/services.json'
import ServiceCard from './serviceContainer'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

const processedServices = services.services.map(s => ({
    ...s,
    slug: slugify(s.name),
    summaryHTML: s.summary.replace(/\n\s*\n?/g, '<br /><br />'),
}))

const ServicesSection = () => {
    const [accorname, setAccorName] = useState('')

    const toggle = useCallback(name => {
        setAccorName(prev => (prev === name ? '' : name))
    }, [])

    const data = useMemo(
        () =>
            processedServices.map((service, index) => (
                <ServiceCard
                    key={service.slug}
                    service={service}
                    index={index}
                    isOpen={accorname === service.name}
                    toggle={toggle}
                />
            )),
        [accorname, toggle],
    )

    return (
        <section className="w-screen min-h-screen bg-white lg:pt-20 pt-20 pb-32">
            <Scroller />
            {data}
        </section>
    )
}
export default ServicesSection
