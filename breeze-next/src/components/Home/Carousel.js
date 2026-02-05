'use client'

import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'

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
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container min-h-full">
                    {slides?.map(index => (
                        <div
                            className="embla__slide h-[20rem] md:h-[45.5vh] lg:h-screen "
                            key={index}>
                            <img
                                className="embla__slide__img"
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Your alt text"
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
