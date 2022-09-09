import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className=''>
        <div className='flex justify-between mx-auto w-[1200px]'>
            <div className='logo'>
                <img src="https://galaxynetbd.com/wp-content/uploads/2021/07/galaxynet.png" width={250} alt="" />    
            </div>   
            <div className='mt-7'>
                <form className='relative'>
                    <input className=' w-[350px] pl-2 h-8 border border-black rounded-sm' type="text" placeholder='Tìm kiếm...' />
                    <button className='absolute right-2 top-1'><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div> 
            <div className='flex text-[#737373] w-[150px] justify-between'>
                <button className=' hover:text-red-600 font-bold text-sm hover:text-[15px] duration-500'>Đăng ký</button>
                <button className=' hover:text-red-600 font-bold text-sm hover:text-[15px] duration-500'>Đăng nhập</button>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}

export default Header