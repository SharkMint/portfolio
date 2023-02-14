import "./../styles/About.css";
import React from "react";
import curriculo from "../docs/Curriculum.pdf";
import fotomia from "../assets/img/Fotomia.jpg";
import github from "../assets/img/github.png";
import instagram from "../assets/img/instagram.png";
import linkedin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";

const About = () => {
  return (
    <div className='a' id="about" style={{ height: "100vh" }} >

      <h1 className='a-text'>Sobre mi</h1>

      <div className='a-container'>

        <div className="a-section" >
          <img src={fotomia} alt="foto" className="a-img" />
          <h1 className='a-label-name'>Maicol Jaquez</h1>
          <h1 className='a-label-profesion'>Software Developer</h1>

          <div className="a-redes" >
            <a href="https://www.linkedin.com/in/maicol-jaquez-ramirez-926917190/" >
              <img src={linkedin} alt="linkedin" className="a-icon" />
            </a>

            <a href="https://twitter.com/MaicolJaquez" >
              <img src={twitter} alt="twitter" className="a-icon" />
            </a>

            <a href="https://github.com/SharkMint" >
              <img src={github} alt="github" className="a-icon" />
            </a>

            <a href="https://www.instagram.com/maicoljaquez_ramirez/" >
              <img src={instagram} alt="instagram" className="a-icon" />
            </a>
          </div>
        </div>

        <div className="a-section2" >
          <div className='a-card' >
            <p className='a-me'>
              Soy desarrollador de software localizado en Republica Dominicana, me considero un autodicacta apasionado,
              disfruto de crear proyectos en los cuales aplico mis conocimientos, atento a los detalles, organizado,
              orientado a resultados y a la resolucion de problemas.
            </p>
            <p className='a-me'>
              Me considero un autodidacta amante de este mundo del software, y como todo buen programador, tanmbien disfruto
              de una buena tasa de cafe.
            </p>
          </div>

          <button className="a-download" >
            <a className="a-cv" href={curriculo} download="curriculo"  >
              Descargar CV
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About;
