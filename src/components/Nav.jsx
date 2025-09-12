import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";



const Nav = () => {
    const [show, setShow] = useState(false)
  return (
    <nav className='flex items-center justify-between container w-[92%] mx-auto h-[50px]'>
        <div className='flex items-center gap-1  cursor-pointer hover:text-purple-700'>
            <p className='text-purple-500 rounded-md font-bold text-xl'>Redux-Tool-Kit</p>
            <TbBrandRedux size={35} className='text-purple-500'/>
        </div>
        <div className="sm:hidden md:flex">
            <ul className='flex gap-3 items-center'>
                <li className='hover:text-blue-500'>Counter</li>
                <li className='hover:text-blue-500'>Todo List</li>
            </ul>
        </div>
        <div className='md:hidden relative duration-300 transition-transform'>
            {show ? <MdClose className='cursor-pointer hover:text-red-600' size={30} onClick={()=>setShow((previous) => !previous)}/>: <CiMenuFries className='cursor-pointer hover:text-blue-600' size={30} onClick={()=>setShow((previous) => !previous)}/>
}
            
             {
                show && (
                    <ul className='absolute transition-all duration-300 bg-gray-200 border-2 border-gray-200 flex flex-col gap-3 justify-start px-5 py-5 min-h-[70vh] mt-2 right-0 shadow-xl rounded-xl  w-[90vw]'>
                        <li className='hover:text-blue-800 hover:bg-gray-300 rounded-lg p-2 text-xl'>Counter</li>
                        <li className='hover:text-blue-800 hover:bg-gray-300 rounded-lg p-2 text-xl'>Todo List</li>
                    </ul>
                )
             }
        </div>
    </nav>
  )
}

export default Nav