// styles removed: using Tailwind utilities only
import React from "react";
import cafeteria from "../assets/img/RestaurantCafe.png";
import libros from "../assets/img/Libreria.png";
import netflix from "../assets/img/netflix-clone.png";
import tienda from "../assets/img/TiendaVirtual.png";

const ProjectCard = ({img, title, repo}) => (
  <div className="relative w-full h-44 rounded-xl overflow-hidden group bg-white/5 card-hover">
    <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
      <div className="p-4 w-full flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-sm text-white/80">Project demo & source</p>
        </div>
        <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-md">Ver repo</a>
      </div>
    </div>
  </div>
)

const Proyects = () => {
  return (
    <section id="proyect" className="py-16 bg-[#071022]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <ProjectCard img={cafeteria} title="El Gustico" repo="https://github.com/SharkMint/RestaurantCafe" />
          <ProjectCard img={tienda} title="Tienda Virtual" repo="https://github.com/SharkMint/TiendaOnline" />
          <ProjectCard img={netflix} title="Netflix Clone" repo="https://github.com/SharkMint/netflix-clone" />
          <ProjectCard img={libros} title="Library" repo="https://github.com/SharkMint/TiendaDeLibros" />
        </div>
      </div>
    </section>
  )
}

export default Proyects;