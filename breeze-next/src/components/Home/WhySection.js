import dynamic from 'next/dynamic'

const OPTIONS = { loop: true, duration: 30 }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// Optimized dynamic import with loading state
const EmblaCarousel = dynamic(() => import('@/components/Home/Carousel'), {
    ssr: false,
    loading: () => (
        <div className="h-[300px] lg:h-[500px] w-full bg-white/10 animate-pulse rounded-xl" />
    ),
})

// Extract icon as component to avoid repetition
const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 flex-shrink-0"
        aria-hidden="true">
        <path
            fill="#ffffff"
            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm41-159c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39-150.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l150.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80z"
        />
    </svg>
)

// Move data outside component to prevent recreation on each render
const WHY_US_DATA = [
    'Multi-field expertise: legal, land, architecture, certification.',
    'Strong Regulatory Knowledge aligned with current government regulations',
    'Integrated One-stop compliance solutions for diverse business needs.',
    'Clear processes and transparent timelines.',
    'Broad professional network with government and certification agencies.',
]

const WhySection = () => {
    return (
        <section
            className="w-full min-h-full md:min-h-0 md:h-[50vh] lg:h-full lg:min-h-full bg-primary flex flex-col gap-12 md:flex-row py-5 md:gap-4 lg:gap-0"
            style={{ color: 'var(--color-primary)' }}
            aria-labelledby="why-us-heading">
            {/* Content Side */}
            <div
                className="w-full md:w-1/2 h-3/4 md:h-full lg:h-screen lg:rounded-xl"
                style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="px-4 pt-4">
                    <h2
                        id="why-us-heading"
                        className="text-5xl lg:text-6xl font-bold mt-4">
                        Why us?
                    </h2>
                    <p className="mt-4 text-sm lg:text-base">
                        We combine regulatory expertise, professional integrity,
                        and a structured working approach to deliver reliable
                        and effective solutions.
                    </p>
                </div>

                {/* Features List */}
                <ul className="mt-12 lg:mt-32 space-y-3 px-4" role="list">
                    {WHY_US_DATA.map((data, index) => (
                        <li
                            key={data}
                            className="flex justify-between items-center gap-5 bg-[#FFFFFF30] lg:h-14 px-4 py-3 lg:py-0 rounded-lg hover:bg-[#FFFFFF40] transition-colors">
                            <p className="text-xs lg:text-base xl:text-lg leading-relaxed">
                                {data}
                            </p>
                            <ArrowIcon />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Carousel Side */}
            <div className="w-full md:w-1/2 h-full md:h-full md:max-h-full flex justify-center items-center lg:ps-8">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </section>
    )
}

export default WhySection
