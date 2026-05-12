import  hamburguer  from '../assets/hamburguer.png'
import logoImg from '../assets/logoImg.png'
import logoEsc from '../assets/logoEsc.png'
import user from '../assets/user.png'

function Navbar(){
    return(
        <div className='flex justify-between bg-linear-to-r from-black to-32% to-zinc-800 h-[6.25rem] p-10'>
            <div className='flex items-center'>
                <button className='cursor-pointer'><img src={hamburguer} alt="" className='pr-9 h-7' /></button> 
                <img src={logoImg} alt="" />
                <img src={logoEsc} alt="" />
            </div>
            <div className='flex items-center'>
                <button className='cursor-pointer'><img src={user} alt="" className=''/></button>
            </div>
        </div>
    )
}

export default Navbar