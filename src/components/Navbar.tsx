import { assets } from '@assets/assets'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-2 px-[4%]'>
      <img className='logo' style={{ width: "max(10%, 80px)" }} src={assets.logo} alt="Logo Icon" />
      <img className='profile w-10' src={assets.profile_image} alt="Profile Icon" />
    </nav>
  )
}

export default Navbar