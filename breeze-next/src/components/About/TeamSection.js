import Image from 'next/image'
import Anggota1 from '../../../public/assets/Arya.PNG'
import Anggota2 from '../../../public/assets/Eko.PNG'
import Anggota3 from '../../../public/assets/Edy.JPG'
import Anggota4 from '../../../public/assets/Tyas.PNG'

const TeamSection = () => {
    const datas = [
        {
            name: 'Arya Budi Setyawan',
            jabatan: 'Director',
            image: Anggota1,
        },
        {
            name: 'Eko Wijiati',
            jabatan: 'Law and Land Legal Expertise',
            image: Anggota2,
        },
        {
            name: 'Edy Pamuji',
            jabatan: 'Architecture Expertise',
            image: Anggota3,
        },
        {
            name: 'Tri Wahyuningtyas',
            jabatan: 'Certification Expertise',
            image: Anggota4,
        },
    ]

    const displayData = datas.map((data, index) => (
        <div className="card w-72 h-[30rem] mt-12" key={index}>
            <figure className="image-wrapper w-full h-72 relative shadow-xl shadow-[#00000050] rounded-2xl">
                <Image
                    src={data.image}
                    alt={`${data.jabatan} image`}
                    fill
                    sizes="(max-width: 1024px) 288px, 384px"
                    className="object-cover rounded-2xl"
                />
            </figure>
            <h3 className="text-center text-2xl mt-8">{data.name}</h3>
            <p className="text-[#000000] font-light text-center mt-2">
                {data.jabatan}
            </p>
        </div>
    ))

    return (
        <section className="w-screen min-h-screen bg-white">
            <h2 className="text-center text-6xl font-bold">Meet the team</h2>
            <div className="flex flex-wrap justify-center mt-28 md:gap-12">
                {displayData}
            </div>
        </section>
    )
}
export default TeamSection
