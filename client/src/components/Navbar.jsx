
import {assets} from '../assets/assets'
import {useAppContext} from '../context/AppContext'
const Navbar = () => {

    const {navigate,token} = useAppContext()
  return (
    <div className='flex justify-between items-center 
    sm:mx-16 xl:mx-25' >
        <img onClick={()=>navigate('/')} src='/new1.png' alt="logo" className='w-32 sm:w-44' />
        <button onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm
        cursor-pointer bg-primary text-white px-10 py-2.5' >
          {token?'Dashboard':'Login'}
            <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>
      
    </div>
  )
}

export default Navbar
