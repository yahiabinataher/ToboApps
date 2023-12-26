import React from 'react'
import { IoDocumentText } from "react-icons/io5";



const Header = () => {
  return (
    <header className='header container mx-auto bg-gray-900 p-10 border-b border-dashed border-teal-900 rounded-tl-lg rounded-tr-lg '>
        <h2 className='uppercase font-semibold tracking-widest flex gap-2 text-teal-500 items-center'>
            <span><IoDocumentText/></span>
            <span>Todo Apps</span>
        </h2>
    </header>
  )
}

export default Header