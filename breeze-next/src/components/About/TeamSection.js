import Image from 'next/image'
import Anggota1 from '../../../public/assets/anggota1.png'
import Anggota2 from '../../../public/assets/anggota2.png'
import Anggota3 from '../../../public/assets/anggota3.png'
import Anggota4 from '../../../public/assets/anggota4.png'
import Anggota5 from '../../../public/assets/anggota5.png'

const TeamSection = () => {
    const datas = [
        {
            name: 'Anggota 1',
            jabatan: 'Licensing Officer',
            image: Anggota1,
        },
        {
            name: 'Anggota 2',
            jabatan: 'Legal Administration Officer',
            image: Anggota2,
        },
        {
            name: 'Anggota 3',
            jabatan: 'Licensing Officer',
            image: Anggota3,
        },
        {
            name: 'Anggota 4',
            jabatan: 'Licensing Consultant',
            image: Anggota4,
        },
        {
            name: 'Anggota 5',
            jabatan: 'Back Office Staff',
            image: Anggota5,
        },
    ]

    const displayData = datas.map((data, index) => (
        <div className="card w-72 h-[30rem] mt-12">
            <div className="image-wrapper w-full h-72 relative shadow-xl shadow-[#00000050] rounded-2xl">
                <Image
                    src={data.image}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>
            <h1 className="text-center mt-8">{data.name}</h1>
            <h2 className="text-[#00000050] text-center mt-2">
                {data.jabatan}
            </h2>
        </div>
    ))

    return (
        <div className="w-screen min-h-screen bg-white">
            <h1 className="text-center text-6xl font-bold">Meet the team</h1>
            <div className="flex flex-wrap justify-center mt-28 md:gap-12">
                {displayData}
            </div>
        </div>
    )
}
export default TeamSection
