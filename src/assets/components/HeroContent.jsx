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

      <h2 className="md:text-4xl text-center font-mono  text-2xl mt-4 font-semibold tracking-wider text-amber-300 drop-shadow">
        Full Stack Developer
      </h2>

      <p className="mt-5 max-w-2xl text-amber-100/90 font-mono leading-relaxed">
        I build fast, scalable and user-friendly web applications using modern
        technologies. I focus on clean UI, optimized performance and solving
        real-world problems through code.
      </p>
      <div className='flex gap-6 mt-4'>
        <a
        href='/resume.pdf'
          download="/resume.pdf"
          rel="noopener noreferrer"
        >
          <button className="font-mono border border-amber-300 px-4 py-2 rounded-2xl hover:bg-amber-300 hover:text-black transition cursor-pointer">
            Download CV
          </button>
        </a>
        <a
        href="https://wa.me/919778389186?text=Hi%20Sameer,%20I%20saw%20your%20portfolio,%20how%20are%20you%20?"
        target='_blank'
        >
          <button className=" font-mono border border-amber-300 px-4 py-2 rounded-2xl hover:bg-amber-300 hover:text-black transition cursor-pointer">
           Get in Touch
          </button>
        </a>
      </div>


      <div className="mt-1">
        <UserDetails />
      </div>

    </div>
  );
}
