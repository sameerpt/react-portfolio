import React from 'react'

export default function NavBar() {
  return (
    <div >
        <div className='w-full flex justify-center  items-center py-6  px-40 text-amber-50'>
            <ul className='flex justify-center  items-center w-70 gap-9 font-bold cursor-pointer font-mono text-[1.6rem] px-10 py-4 rounded-3xl'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
    </div>
  )
}
