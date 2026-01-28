'use client'

import Hero from '@/components/Hero'
import { useParams } from 'next/navigation'
import services from '@/services.json'
import Summary from '@/components/Service/Summary'
import Portfolios from '@/components/Service/Portfolios'
import WorkflowSection from '@/components/Service/WorkflowSection'
import TestimoialsSection from '@/components/Service/TestimonialsSection'

const Service = () => {
    const { title } = useParams()
    const displayTItle = title.replace(/%20/g, ' ').replace(/%26/g, '&')

    const dataArray = Object.values(services.services)
    const service = dataArray.filter(data => data.name == displayTItle)

    return (
        <>
            <Hero title={displayTItle} />
            <Summary service={service} />
            <Portfolios service={service} />
            <WorkflowSection service={service} />
            <TestimoialsSection service={service} />
        </>
    )
}
export default Service
