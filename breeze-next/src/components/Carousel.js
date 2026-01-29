'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useBlog } from '@/hooks/blog'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Carousel = () => {
    const isMobile = useIsMobile(500)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const { blogs } = useBlog()

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        align: 'center',
    })

    const scrollTo = useCallback(
        i => emblaApi && emblaApi.scrollTo(i),
        [emblaApi],
    )

    const chunk = (arr, size) => {
        const res = []
        for (let i = 0; i < arr.length; i += size) {
            res.push(arr.slice(i, i + size))
        }
        return res
    }

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    const blogsData = blogs?.blogs ?? []
    const size = isMobile ? 2 : 4

    const slides = chunk(
        blogsData?.filter((_, i) => i > 1),
        size,
    )

    const formatedDate = date => {
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    }

    return (
        <div className="w-screen h-full bg-white mt-12">
            <div
                ref={emblaRef}
                key={isMobile ? 'mobile' : 'desktop'}
                className="overflow-hidden">
                <div className="flex">
                    {slides.map((group, i) => (
                        // 1 SLIDE = 1 DOT
                        <div key={i} className="flex-[0_0_100%] px-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 ">
                                {group.map((blog, j) => (
                                    <Link key={j} href={`/blog/${blog.slug}`}>
                                        <article className="flex gap-4 w-full">
                                            <figure className="relative min-w-40 h-52">
                                                <Image
                                                    src={`http://localhost:8000/${blog.image}`}
                                                    fill
                                                    className="object-cover absolute"
                                                />
                                            </figure>

                                            <div>
                                                <h3 className="font-semibold text-[1rem] md:text-lg ">
                                                    {blog.title}
                                                </h3>
                                                <p className="text-xs text-gray-500 mt-2">
                                                    {formatedDate(
                                                        blog.created_at,
                                                    )}
                                                </p>
                                                <p className="text-sm text-gray-400 mt-2 w-32 truncate">
                                                    {blog.subtitle}
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {!blogs && <p className="text-center">Loading. . .</p>}

            {slides.length > 0 && (
                <div className="flex justify-center mt-5 gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`dot w-3 h-3 rounded-full transition-colors ${
                                i === selectedIndex
                                    ? 'bg-gray-800'
                                    : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Carousel
