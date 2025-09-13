import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-3'>
        <Link to='/counter' className='hover:text-gray-400'>Counter</Link>
        <hr/>
        <Link to='/todolist' className='hover:text-gray-400'>Todo List</Link>
        <hr/>
      </div>
    </div>
  )
}

export default Home