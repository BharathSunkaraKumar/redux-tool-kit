import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completeTodo } from '../features/todo/todoSlice'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";



const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  console.log(todos)
  const handleAdd = (e) => {
    e.preventDefault()
    dispatch(addTodo(todo))
    setTodo('')
  }
  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold text-green-300'>TodoList</h1>
        <div>
          <form className='flex gap-4 justify-center mt-5 mb-5'>
            <input onChange={(e) => {setTodo(e.target.value)}} value={todo} className='border-2 border-blue-500 text-black rounded-lg p-3' type='text' name='todo' placeholder='enter todos'/>
            <button onClick={handleAdd} className='bg-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors'>Add Todo</button>
          </form>
          <ul className='flex flex-col items-center'>
            {
              todos.map((todo) => (
                <li 
                className='flex gap-10 justify-around border-2 p-3 w-full mb-3'
                key={todo.id}
                >
                  <h3 className={`${todo.completed && `line-through`} w-5 text-xl font-mono`}>{todo.text}</h3>
                  <div 
                    className='flex items-center'>
                      {todo.completed ? 
                      <button onClick={()=>{dispatch(completeTodo(todo.id))}}
                      >
                        <MdOutlineCancel className='text-red-300 hover:text-red-500 transition-colors'  size={25}/>
                      </button>: 
                      <button onClick={()=>{dispatch(completeTodo(todo.id))}}>
                        <IoCheckmarkDoneCircleSharp 
                        className='text-green-300 hover:text-green-500 transition-colors'  size={25}
                        />
                      </button>
                  }</div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList