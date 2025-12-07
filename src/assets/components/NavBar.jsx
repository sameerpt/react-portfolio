import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div >
      <div className='w-full flex justify-center  items-center  py-6  px-40 text-amber-100 '>
        <ul className='flex justify-center  items-center w-4/14 gap-9 font-bold cursor-pointer font-mono text-[1.3rem]  md:text-[1.6rem] px-10 py-3 rounded-3xl'>
          <Link to='/' className='hover:text-amber-400 text-amber-300'>Home</Link>
          <li>About</li>
         <Link to='/projects' className='hover:text-amber-200'>Projects</Link>
        </ul>

      </div>
    </div>
  )
}
