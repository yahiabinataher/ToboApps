import React from 'react'

const Footer = () => {
  return (
    <footer className='container mx-auto text-center text-sm p-6 bg-gray-900 text-teal-500 border-t border-dashed border-teal-900'>
        <p >&copy; {new Date().getFullYear()} React Todo App. All rights reserved.</p>
    </footer>
  )
}

export default Footer