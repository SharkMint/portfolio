// styles removed: using Tailwind utilities only
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-[#030618] to-transparent text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-lg">Maicol Jaquez</p>
          <p className="text-sm text-white/60">Software Developer — © {new Date().getFullYear()}</p>
        </div>

        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#home" className="text-white/80 hover:text-primary">Home</a>
          <a href="#proyect" className="text-white/80 hover:text-primary">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;