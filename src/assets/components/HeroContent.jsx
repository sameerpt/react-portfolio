import { Link } from 'react-router-dom';
import UserDetails from './UserDetails'

export default function HeroContent() {
  return (
    <div className="z-20 flex flex-col justify-center items-center text-center h-[70vh] px-4 text-amber-50">

      <p className="text-amber-200 font-mono text-xl tracking-widest mb-2 animate-pulse">
        HELLO, I'M
      </p>

      <h1 className="md:text-7xl text-4xl font-bold text-white drop-shadow-lg">
        SAMEER <span className='text-amber-300'>P</span ><span className='text-amber-300'> T</span>
      </h1>

      <h2 className="md:text-4xl text-center  text-2xl mt-4 font-semibold tracking-wider text-amber-300 drop-shadow">
        Full Stack Developer
      </h2>

      <p className="mt-5 max-w-2xl text-amber-100/90 font-mono leading-relaxed">
        I build fast, scalable and user-friendly web applications using modern
        technologies. I focus on clean UI, optimized performance and solving
        real-world problems through code.
      </p>
      <a
        href="/SameerResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 font-mono border border-amber-300 px-4 py-2 rounded-2xl hover:bg-amber-300 hover:text-black transition cursor-pointer">
          Get in Touch
        </button>
      </a>


      <div className="mt-1">
        <UserDetails />
      </div>

    </div>
  );
}
