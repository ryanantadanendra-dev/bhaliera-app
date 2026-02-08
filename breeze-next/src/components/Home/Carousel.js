'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import Carousel1 from '../../../public/assets/carousel1.PNG'
import Carousel2 from '../../../public/assets/carousel2.PNG'
import Carousel3 from '../../../public/assets/carousel3.jpeg'
import Carousel4 from '../../../public/assets/carousel4.jpeg'
import Image from 'next/image'

const datas = [Carousel1, Carousel2, Carousel3, Carousel4]

const EmblaCarousel = props => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Fade(),
        Autoplay({ delay: 6000 }),
    ])

    useEffect(() => {
        if (!emblaApi) return

        const updateFade = () => {
            emblaApi.slideNodes().forEach((slide, index) => {
                slide.classList.toggle(
                    'is-selected',
                    index === emblaApi.selectedScrollSnap(),
                )
            })
        }

        emblaApi.on('select', updateFade)
        emblaApi.on('init', updateFade)
        updateFade()
    }, [emblaApi])

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container w-full min-h-full">
                    {datas?.map((image, index) => (
                        <div
                            className="embla__slide min-w-full h-[20rem] md:h-[45.5vh] lg:h-screen relative"
                            key={index}>
                            <Image
                                className="embla__slide__img"
                                src={image}
                                alt="Your alt text"
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div> */}

            {/* <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex
                                    ? ' embla__dot--selected'
                                    : '',
                            )}
                        />
                    ))}
                </div> */}
            {/* </div> */}
        </div>
    )
}

export default EmblaCarousel
