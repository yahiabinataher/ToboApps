import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash } from "react-icons/fi";
import axios from 'axios';
const AddTask = () => {
const [todos,setTodos]= useState([])
const [loding,setLoding]= useState(true)
const [error,setError]= useState("")
const [formSub,setFormSub] = useState(true)
const [input,setInput] = useState({
  text:""
})

//add task handle event
const handleTask = (e) => {
  setInput((prev) => ({
    ...prev,
    [e.target.name]:e.target.value
  }))
}

//add todos
const handleTodos = async(e) =>{
  e.preventDefault();
  await axios.post("https://periwinkle-innate-quiet.glitch.me/tasks",input)
  setInput({text:''})
  handleTodoGet()
}

//get todos
const handleTodoGet = async() => {
  try {
    const res = await axios.get("https://periwinkle-innate-quiet.glitch.me/tasks")
  setTodos(res.data)
  setLoding(false)
  } catch (error) {
    setError(error.message)
  }
}
// delete todos

const handleDeleteTodos = async (id) =>{
  await axios.delete(`https://periwinkle-innate-quiet.glitch.me/tasks/${id}`)
  handleTodoGet()
}
//update


// update todos handler
const handleEditTodos = (id) =>{
  setFormSub(false)
  // const data = todos.find((data) => data.id === id)
  // setInput(data)
 
  
 
}
const handleUpdateTodos = async (e) =>{
  e.preventDefault();
  await axios.patch(`https://periwinkle-innate-quiet.glitch.me/tasks/${todos.id}`,input);
  handleTodoGet()
 
}

useEffect(() => {
  handleTodoGet()
},[])



  return (
   <div className='container  mx-auto p-10 bg-gray-900 flex flex-col gap-6'>
    {/* form */}
     <form method='POST' action=""className='flex justify-between' onSubmit={handleTodos}>
        <input name="text" value={input.text} onChange={handleTask}  className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-500 py-2 px-5 ' required type="text" placeholder='What things to do ?' />
        <button   className='bg-teal-900/30 py-2 px-5 border-2 border-teal-500 rounded-md text-teal-500 hover:bg-teal-500 hover:text-gray-900 duration-300' type='submit'>Add Task</button>
    </form>
    {/* Tasklist */}
    {loding? <p>{error ? error : "Loading...."}</p>: todos.length === 0 && <p>No task</p>}
    { <div className='flex flex-col gap-4'>
      {todos?.map((item,index) => {
        return(
          <div key={index} className='task-item flex justify-between items-center bg-gray-800 p-4 rounded-lg hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group'>
    <div className='tesk-left flex items-center gap-3'>
        <span>
            <input type="checkbox" className='accent-teal-500' />
        </span>
          {formSub ?( <p className='group-hover:text-teal-500'>{item.text}</p>):(<form method='POST' onSubmit={handleUpdateTodos}>
          <input type="text" name="text" value={input.text} onChange={handleTask} className='bg-transparent outline-none border-b-2 border-gray-600 focus:border-teal-400 py-2 px-5 ' />
        </form>)}
          

       
    </div>
    <div className='tesk-right flex items-center gap-3 '>
        <button><FiEdit onClick={() => handleEditTodos(item.id)} className='text-gray-500 hover:text-teal-500 cursor-pointer duration-300'/></button>
        <button><FiTrash onClick={() => handleDeleteTodos(item.id)} className='text-gray-500 hover:text-red-500 cursor-pointer duration-300'/></button>
    </div>
</div>
        )
      })}
    </div>}
    
   </div>
  )
}

export default AddTask