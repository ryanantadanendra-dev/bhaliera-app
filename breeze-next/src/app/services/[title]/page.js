import Hero from '@/components/Hero'
import services from '@/services.json'
import Summary from '@/components/Service/Summary'
import Portfolios from '@/components/Service/Portfolios'
import WorkflowSection from '@/components/Service/WorkflowSection'
import TestimoialsSection from '@/components/Service/TestimonialsSection'

function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and') // ganti & jadi 'and'
        .replace(/[^\w\s-]/g, '') // hapus karakter selain huruf
        .replace(/\s+/g, '-') // spasi -> -
        .replace(/-+/g, '-') // hapus --
}

export async function generateMetadata({ params }) {
    const { title } = params
    const dataArray = Object.values(services.services)
    const service = dataArray.find(
        s => s.name.toLowerCase().replace(/\s+/g, '-') === title,
    )

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The Requested Service Cannot Be Found',
        }
    }

    return {
        title: `${service.name} - ${service.description} | Bhaliera`,
        description: `${service.summary} Offers: ${service.offers.join(', ')}`,

        openGraph: {
            title: service.name,
            description: service.summary,
            type: 'website',
            locale: 'id_ID',
        },

        twitter: {
            card: 'summary_large_image',
            title: service.name,
            description: service.summary,
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
                'max-video-preview': -1,
            },
        },
    }
}

const Service = ({ params }) => {
    const service = Object.values(services?.services).find(
        service => slugify(service.name) === params.title,
    )

    if (!service) {
        console.log(
            'URL slug:',
            params.title,
            'JSON slugs:',
            Object.values(services.services).map(s => slugify(s.name)),
        )
        return <h1 className="text-center mt-20">Service Not Found</h1>
    }

    return (
        <>
            <Hero title={service?.name} />
            <Summary service={service} />
            <Portfolios service={service} />
            {/* <WorkflowSection service={service} /> */}
            <TestimoialsSection service={service} />
        </>
    )
}
export default Service
