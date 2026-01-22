import Logo from '../../../public/assets/logo2.png'
import Image from 'next/image'

const HistorySection = () => {
    return (
        <>
            <div className="w-screen h-full md:h-full lg:h-screen pb-0 md:pb-10 lg:pb-0 bg-white md:pt-24 lg:pt-0 flex flex-col-reverse lg:flex-row md:flex-around lg::justify-between md:items-center md:gap-10 lg:gap-0 justify-end pt-12 lg:px-10">
                <div className="lg::w-1/2 w-full mt-12 md:mt-12 lg:mt-0">
                    <h1 className="text-5xl md:ms-12 ms-0 font-bold text-center md:text-left">
                        Who We Are?
                    </h1>
                    <p className="md:ms-12 ms-4 mt-4 text-lg lg:pe-32 px-12 md:px-0 md:pe-12">
                        PT. Bhumi Bali Sejahtera (BHALIERA) is a professional
                        legal and regulatory consulting firm based in Indonesia.
                        We provide comprehensive solutions in land
                        administration, architectural and construction
                        licensing, and certification services, including ISO
                        22000 (Food Safety Management System) and halal
                        certification. BHALIERA supports individuals and
                        businesses in navigating regulatory complexities with an
                        approach that is accurate, efficient, and fully
                        compliant.
                    </p>
                </div>
                <div className="md:w-1/2 w-full flex justify-center lg:w-1/2">
                    <div className="md:w-96 md:h-56 w-[17rem] h-40 relative lg:w-[30rem] lg:h-[17.7rem]">
                        <Image src={Logo} fill className="object-cover" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistorySection
