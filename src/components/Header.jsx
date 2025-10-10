// styles removed: using Tailwind utilities only
import { Link } from "react-scroll";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-[#020617]/60 via-[#071026]/50 to-[#020617]/60 backdrop-blur sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <img src={require("../assets/img/logo.png")} alt="logo" className="w-10 h-10 rounded-md object-contain" />
            <div>
              <div className="text-white font-semibold">Maicol Jaquez</div>
              <div className="text-xs text-white/60">Software Developer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-white hover:text-primary transition" to="home" spy={true} smooth={true}>Home</Link>
            <Link className="text-white hover:text-primary transition" to="about" spy={true} smooth={true}>About</Link>
            <Link className="text-white hover:text-primary transition" to="skils" spy={true} smooth={true}>Skills</Link>
            <Link className="text-white hover:text-primary transition" to="proyect" spy={true} smooth={true}>Projects</Link>
            <Link className="text-white hover:text-primary transition" to="contact" spy={true} smooth={true}>Contact</Link>
            <a href="/docs/Curriculum.pdf" className="ml-4 inline-flex items-center gap-2 bg-primary px-3 py-2 rounded-md text-sm font-medium text-white hover:opacity-90">Resume</a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-white/5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#071026]"> 
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link className="block text-white py-2" to="home" spy={true} smooth={true} onClick={() => setOpen(false)}>Home</Link>
            <Link className="block text-white py-2" to="about" spy={true} smooth={true} onClick={() => setOpen(false)}>About</Link>
            <Link className="block text-white py-2" to="skils" spy={true} smooth={true} onClick={() => setOpen(false)}>Skills</Link>
            <Link className="block text-white py-2" to="proyect" spy={true} smooth={true} onClick={() => setOpen(false)}>Projects</Link>
            <Link className="block text-white py-2" to="contact" spy={true} smooth={true} onClick={() => setOpen(false)}>Contact</Link>
            <a href="/docs/Curriculum.pdf" className="block text-white py-2">Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;