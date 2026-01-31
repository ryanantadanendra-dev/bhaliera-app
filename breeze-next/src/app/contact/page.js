import Hero from '@/components/Hero'
import Image from 'next/image'
import Img from '../../../public/assets/contact.png'
import SendEmailForm from '@/components/SendEmailForm'

const Contact = () => {
    return (
        <>
            <Hero title="Contact Us" />
            <section className="w-screen min-h-screen bg-white lg:px-20 pt-32">
                <div className="flex flex-col md:flex-row justify-center md:gap-12 px-12 md:px-12">
                    <figure className="relative w-full h-56 mx-auto md:w-1/2 md:h-96">
                        <Image src={Img} fill className="object-cover" />
                    </figure>
                    <div className="w-full md:w-1/2 mt-12 md:mt-0">
                        <h2 className="font-bold text-5xl text-center md:text-start">
                            Contact Information
                        </h2>
                        <ul className="mt-8 md:mt-12 text-lg">
                            <li>PT. Bhumi Bali Sejahtera (BHALIERA)</li>
                            <li className="mt-3">
                                Address: Jl. Raya Puputan Depan Gedung BCA
                                No.188, Renon, Denpasar Selatan, Kota Denpasar,
                                Bali 80239
                            </li>
                            <li className="mt-3">
                                Phone: +62 8515 778 0058 (Arya)
                            </li>
                            <li className="mt-3">
                                Email: bhumibalisejahtera@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row min-h-screen md:min-h-0 md:gap-12 px-5 md:px-12 py-32">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center md:text-start">
                            Looking for reliable legal, licensing, or
                            certification assistance?
                        </h2>
                        <p className="mt-8 text-center md:text-start">
                            Our professional team at PT. Bhumi Bali Sejahtera
                            (BHALIERA) is ready to support your needs with
                            accurate, transparent, and regulation-compliant
                            solutions.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <SendEmailForm />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact
