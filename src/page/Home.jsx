// legacy styles removed; using Tailwind utilities only
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Proyects from "../components/Proyects";
import React from "react";
import Skils from "../components/Skils";
import programer1 from "./../assets/img/programer1.png";

function Home() {
  return (
    <>
  <Header />

      <section id="home" className="hero-section pt-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="space-y-3">
                  <p className="text-sm text-primary uppercase tracking-wider">Software Engineer</p>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white">Hola, soy Maicol<br/> Jaquez</h1>
                  <p className="text-lg md:text-xl text-white/90 max-w-xl mt-4">Construyo experiencias web modernas enfocadas en rendimiento, accesibilidad y diseño bonito — React, Tailwind y buenas prácticas.</p>

                  <div className="mt-6 flex items-center gap-4">
                    <a href="#contact" className="btn-primary">Contactame</a>
                    <a href="/docs/Curriculum.pdf" download className="inline-flex items-center gap-2 bg-white/5 text-white px-4 py-2 rounded-lg">Descargar CV</a>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center shadow-lg">
                  <img src={programer1} alt="avatar" className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-2 border-white/6" />
                </div>
              </div>
            </div>
      </section>

          {/* Featured small projects */}
          <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="text-xl text-white mb-4">Proyectos destacados</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-lg">
                  <img src={require("../assets/img/TiendaVirtual.png")} alt="tienda" className="w-full h-36 object-cover rounded-md" />
                  <h4 className="text-white font-semibold mt-2">Tienda Virtual</h4>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <img src={require("../assets/img/netflix-clone.png")} alt="netflix" className="w-full h-36 object-cover rounded-md" />
                  <h4 className="text-white font-semibold mt-2">Netflix Clone</h4>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <img src={require("../assets/img/RestaurantCafe.png")} alt="cafe" className="w-full h-36 object-cover rounded-md" />
                  <h4 className="text-white font-semibold mt-2">El Gustico</h4>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <img src={require("../assets/img/Libreria.png")} alt="libros" className="w-full h-36 object-cover rounded-md" />
                  <h4 className="text-white font-semibold mt-2">Library</h4>
                </div>
              </div>
            </div>
          </section>

      {/* Quick test element: remove after verification */}
      <div className="hidden md:block">
        <span className="test-tailwind-generated">TAILWIND_TEST</span>
      </div>

      <About />
      <Skils />
      <Proyects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;