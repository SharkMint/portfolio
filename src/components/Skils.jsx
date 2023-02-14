import "./../styles/Skils.css";
import React from "react";
import aspnetmvc from "../assets/img/aspnetmvc.png";
import firebase from "../assets/img/firebase.png";
import iconbootstrap from "../assets/img/bootstrap.png";
import iconcss from "../assets/img/css_3.png";
import icongithub from "../assets/img/github.png";
import iconhtml from "../assets/img/html-5.png";
import iconjavascript from "../assets/img/javascript.png";
import iconreact from "../assets/img/react.png";
import iconredux from "../assets/img/redux.png";
import icontypescript from "../assets/img/typescript.png";
import laravel from "../assets/img/laravel.png";
import mysql from "../assets/img/mysql.png";
import net from "../assets/img/net.png";
import nextjs from "../assets/img/nextjs.png";
import sql from "../assets/img/sql.png";
import tailwind from "../assets/img/tailwind.png";

const Skils = () => {
  return (
    <>
      <div className='s' id="skils" style={{ height: "100vh" }} >
        <h1 className='title' >Habilidades</h1>

        <div className='s-container' >
          <div className='s-skills'>
            <h2 className='title1' >BACKEND</h2>
            <div className='s-content'>

              <div className='s-back-tecno'>
                <div className='s-back--bar' >
                  <img src={aspnetmvc} alt="aspnetmvc" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >ASP.NET MVC</h3>
                </div>

                <div className='s-back--bar' >
                  <img src={net} alt="net" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >.NET</h3>
                </div>

                <div className='s-back--bar' >
                  <img src={laravel} alt="laravel" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >Laravel</h3>
                </div>

                <div className='s-back--bar' >
                  <img src={nextjs} alt="nextjs" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >Next JS</h3>
                </div>
              </div>

              <div className='s-back-tecno'>
                <div className='s-back--bar' >
                  <img src={firebase} alt="firebase" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >Firebase</h3>
                </div>

                <div className='s-back--bar' >
                  <img src={mysql} alt="mysql" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >Mysql</h3>
                </div>

                <div className='s-back--bar' >
                  <img src={sql} alt="sql" className='s-back-icon-skills' />
                  <h3 className='s-back-label' >SQL Server</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='s-skills'>
            <h2 className='title1' >FRONTEND</h2>
            <div className='s-content'>
              <div className='s-front-tecno'>
                <div className='s-front--bar' >
                  <img src={iconhtml} alt="html" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >HTML 5</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={iconcss} alt="css" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >CSS 3</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={iconjavascript} alt="javascrip" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Javascript</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={icontypescript} alt="javascrip" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Typescript</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={tailwind} alt="tailwind" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Tailwind CSS</h3>
                </div>
              </div>

              <div className='s-front-tecno'>
                <div className='s-front--bar' >
                  <img src={iconbootstrap} alt="bootstrap" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Bootstrap</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={icongithub} alt="github" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Github</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={iconreact} alt="react" className='s-front-icon-skills-react' />
                  <h3 className='s-front-label' >React.JS</h3>
                </div>

                <div className='s-front--bar' >
                  <img src={iconredux} alt="redux" className='s-front-icon-skills' />
                  <h3 className='s-front-label' >Redux</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Skils