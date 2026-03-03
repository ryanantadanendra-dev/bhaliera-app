// components/Home/Carousel.jsx
'use client'

import { useEffect, useCallback, useState, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const CAROUSEL_IMAGES = [
    '/assets/gallery3.jpeg',
    '/assets/carousel4.jpeg',
    '/assets/carousel1.png',
    '/assets/carousel5.jpg',
]

const EmblaCarousel = ({ options }) => {
    // Memoize plugin instances to prevent recreation on every render
    const plugins = useMemo(
        () => [Fade(), Autoplay({ delay: 6000, stopOnInteraction: false })],
        [],
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        emblaApi.on('select', onSelect).on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect).off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container w-full min-h-full">
                    {CAROUSEL_IMAGES.map((image, index) => {
                        return (
                            <figure
                                className="embla__slide min-w-full h-[20rem] md:h-[45.5vh] lg:h-screen relative"
                                key={image.src}>
                                <Image
                                    src={image || ''}
                                    alt={`Carousel slide ${index + 1}`}
                                    sizes="(max-width: 1024px) 288px, 384px"
                                    quality={90}
                                    fill
                                    loading="lazy"
                                    className="embla__slide__img object-cover"
                                />
                            </figure>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
