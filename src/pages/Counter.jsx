import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      {/* <div className='flex justify-center flex-col gap-2 items-center w-full'>
        <p>Increment by value</p>
        <input onChange={(e)=>{dispatch(incrementByAmount(parseInt(e.target.value)))}} className='border-2 border-black rounded-md' type='number' />
      </div> */}
      <div className='flex justify-center gap-5 h-[80vh] items-center'>
      <div>
        <button onClick={()=>{dispatch(decrement())}} className=' px-3 pb-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300'>-</button>
      </div>
      <div>
        <p className='font-bold text-xl p-3'>{count}</p>
      </div>
      <div>
        <button onClick={()=>{dispatch(increment())}} className='px-3 pb-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-300'>+</button>
      </div>
      
    </div>
    </div>
  )
}

export default Counter