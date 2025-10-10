// styles removed: using Tailwind utilities only
import React from "react";
import curriculo from "./../docs/Curriculum.pdf";
import fotomia from "./../assets/img/Fotomia.jpg";
import github from "./../assets/img/github.png";
import instagram from "./../assets/img/instagram.png";
import linkedin from "./../assets/img/linkedin.png";
import twitter from "./../assets/img/twitter.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-tr from-[#020617] to-[#061827]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center md:items-start">
          <img src={fotomia} alt="foto" className="w-36 h-36 rounded-full object-cover border-2 border-primary" />
          <h2 className="text-white text-2xl font-semibold mt-4">Maicol Jaquez</h2>
          <p className="text-primary mt-1">Software Developer</p>

          <div className="flex gap-4 mt-6">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/maicol-jaquez-ramirez-926917190/">
              <img src={linkedin} alt="linkedin" className="w-6 h-6" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/MaicolJaquez">
              <img src={twitter} alt="twitter" className="w-6 h-6" />
            </a>
            <a aria-label="Github" href="https://github.com/SharkMint">
              <img src={github} alt="github" className="w-6 h-6" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/maicoljaquez_ramirez/">
              <img src={instagram} alt="instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white/3 p-6 rounded-xl border border-white/5">
            <h3 className="text-xl text-white font-semibold mb-3">Sobre mí</h3>
            <p className="text-white/90 leading-relaxed">
              Soy desarrollador de software desde República Dominicana. Me apasiona crear productos web con atención
              al detalle, rendimiento y experiencia de usuario. Disfruto aprender tecnologías nuevas y aplicar buenas
              prácticas de ingeniería para entregar soluciones mantenibles.
            </p>

            <p className="text-white/90 leading-relaxed mt-4">
              Trabajo tanto en frontend como en backend: React, Next.js y Tailwind para interfaces; .NET, Node y bases
              de datos para la parte de servicios. Me encanta resolver problemas y colaborar en equipos multidisciplinares.
            </p>

            <div className="mt-6">
              <a href={curriculo} download className="inline-flex items-center gap-2 btn-primary">Descargar CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
