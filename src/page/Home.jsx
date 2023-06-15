import "./../styles/Home.css";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ParticlesBackground from "../components/ParticlesBackground";
import Proyects from "../components/Proyects";
import React from "react";
import Skils from "../components/Skils";
import programer1 from "./../assets/img/programer1.png";

function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />

      <div className='i' id="home" style={{height: 500}} >

        <div className='i-right'>
          <div className='i-card-bg'></div>
          <div className='i-card'>
            <img src={programer1} className='i-img' alt='avatar' />
          </div>
        </div>

        <div className='i-left'>
          <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hola, soy Maicol Jaquez</h2>
            <h2 className='i-title-item'>Software Developer </h2>
          </div>
        </div>
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