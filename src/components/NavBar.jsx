import React from 'react'
import useMenu from '../hooks/useMenu'
import MenuFunction from '../functions/menuFunction'
import MenuFunction2 from '../functions/MenuFunction2'

const NavBar = () => {

  let [menuIsOpen, toggle] = useMenu()

  return (
    <>
      <div className=' backdrop-blur-lg h-17 sticky z-10 top-0 flex justify-between md:mx-10 items-center'>
        <div className='cursor-pointer flex items-center space-x-2'>
          <h1 className='bg-orange-500 px-4 py-1 w-10 text-center text-white rounded text-2xl font-semibold'>k</h1>
          <h1 className='text-2xl font-semibold'>Kojo</h1>
        </div>

        <div className='hidden md:flex items-center space-x-10'>
          <ul className='flex space-x-6 text-md'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Agents</li>
            <li className='cursor-pointer'>Use Cases</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Docs</li>
          </ul>
          <button className='cursor-pointer px-7 py-1 border rounded-4xl'>Sign Up </button>
        </div>

      <div className='flex justify-end  space-x-2 md:hidden'>
        <MenuFunction
          menuIsOpen={menuIsOpen}
          toggle={toggle} />
      </div>

      </div>
      {menuIsOpen && (
        <div className='md:hidden fixed inset-0 h-dvh flex items-center justify-center flex-col bg-red-300'>
          <ul className='text-md text-center space-y-7 mb-7'>
            <li className='cursor-pointer' onClick={toggle}>Home</li>
            <li className='cursor-pointer' onClick={toggle}>Agents</li>
            <li className='cursor-pointer' onClick={toggle}>Use Cases</li>
            <li className='cursor-pointer' onClick={toggle}>Pricing</li>
            <li className='cursor-pointer' onClick={toggle}>Docs</li>
          </ul>

          <button className='cursor-pointer px-7 py-2 border rounded-4xl mb-7' onClick={toggle}>Sign Up </button>
          <MenuFunction2
            menuIsOpen={menuIsOpen}
            toggle={toggle} />
        </div>
      )}
    </>

  )
}

export default NavBar
