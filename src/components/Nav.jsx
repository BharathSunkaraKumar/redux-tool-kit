import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Nav = () => {
    const [show, setShow] = useState(false)
  return (
    <nav className='flex items-center justify-between container mx-auto p-3'>
        <div className='relative flex items-center gap-1  cursor-pointer hover:text-purple-700'>
            <p className='text-purple-500 rounded-md font-bold text-xl'>Redux-Tool-Kit</p>
            <Link to='/' className='absolute inset-0'></Link>
            <TbBrandRedux size={35} className='text-purple-500'/>
        </div>
        <div className="sm:hidden md:flex">
            <ul className='flex gap-3 items-center'>
                <li className='hover:text-gray-300 hover:underline'>
                    <Link to='/counter'>Counter</Link>
                </li>
                <li className='hover:text-gray-300 hover:underline'>
                    <Link to='/todolist'>Todo List</Link>
                </li>
            </ul>
        </div>
        <div className='md:hidden relative duration-300 transition-transform'>
            {show ? <MdClose className='cursor-pointer hover:text-red-600' size={30} onClick={()=>setShow((previous) => !previous)}/>: <CiMenuFries className='cursor-pointer hover:text-blue-600' size={30} onClick={()=>setShow((previous) => !previous)}/>
}
            
             {
                show && (
                    <ul className='absolute bg-black text-white right-1 top-10 rounded-lg p-5 w-[80vw] '>
                        <li className='hover:text-blue-800 hover:bg-gray-300 rounded-lg p-2 text-xl  px-2 py-1'>
                            <Link onClick={()=>setShow((previous) => !previous)} to='/counter'>Counter</Link>
                        </li>
                        <li className='hover:text-blue-800 hover:bg-gray-300 rounded-lg p-2 text-xl'>
                            <Link onClick={()=>setShow((previous) => !previous)} to='/todolist'>Todo List</Link> 
                        </li>
                    </ul>
                )
             }
        </div>
    </nav>
  )
}

export default Nav