import "./../styles/Proyects.css";
import React from "react";
import cafeteria from "../assets/img/RestaurantCafe.png";
import libros from "../assets/img/Libreria.png";
import netflix from "../assets/img/netflix-clone.png";
import tienda from "../assets/img/TiendaVirtual.png";

const Proyects = () => {
  return (
    <div className='p' id="proyect" style={{height: "auto"}} >
      <h1 className='p-text'>Proyectos</h1>

      <ul className='p-cards'>
        <li className='p-card-item'>
          <div className='p-card'>
            <div className='p-card-imgage'>
              <img src={cafeteria} className="p-card-img" />
            </div>
            <div className='p-card-content'>
              <h2 className='p-card-title'>El Gustico</h2>
              <a href='https://github.com/SharkMint/RestaurantCafe' className='p-card-description'>Git Repository</a>
            </div>
          </div>
        </li>

        <li className='p-card-item'>
          <div className='p-card'>
            <div className='p-card-imgage'>
              <img src={tienda} className="p-card-img" />
            </div>
            <div className='p-card-content'>
              <h2 className='p-card-title'>Tienda Virtual</h2>
              <a href='https://github.com/SharkMint/TiendaOnline' className='p-card-description'>Git Repository</a>
            </div>
          </div>
        </li>

        <li className='p-card-item'>
          <div className='p-card'>
            <div className='p-card-imgage'>
              <img src={netflix} className="p-card-img" />
            </div>
            <div className='p-card-content'>
              <h2 className='p-card-title'>Netflix Clone</h2>
              <a href='https://github.com/SharkMint/netflix-clone' className='p-card-description'>Git Repository</a>
            </div>
          </div>
        </li>

        <li className='p-card-item'>
          <div className='p-card'>
            <div className='p-card-imgage'>
              <img src={libros} className="p-card-img" />
            </div>
            <div className='p-card-content'>
              <h2 className='p-card-title'>Library</h2>
              <a href='https://github.com/SharkMint/TiendaDeLibros' className='p-card-description'>Git Repository</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Proyects;