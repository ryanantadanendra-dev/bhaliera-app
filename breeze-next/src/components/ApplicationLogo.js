import Image from 'next/image'
import Logo from '../../public/assets/logo.png'

const ApplicationLogo = props => (
    <Image src={Logo} alt="Logo" width={100} height={100} priority {...props} />
)

export default ApplicationLogo
