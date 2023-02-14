import "./../styles/Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="navbar" >
        <nav className='header'>
          <ul className='header-list'>
            <li className='header-item' >
              <Link className='header-link' activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
            </li>
            <li className='header-item' >
              <Link className='header-link' to="about" spy={true} smooth={true}>Me</Link>
            </li>
            <li className='header-item'>
              <Link className='header-link' to="skils" spy={true} smooth={true}>Habilidades</Link>
            </li>
            <li className='header-item'>
              <Link className='header-link' to="proyect" spy={true} smooth={true}>Proyectos</Link>
            </li>
            <li className='header-item'>
              <Link className='header-link' to="contact" spy={true} smooth={true}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;