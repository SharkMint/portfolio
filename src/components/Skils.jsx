// styles removed: using Tailwind utilities only
import React from "react";
import aspnetmvc from "./../assets/img/aspnetmvc.png";
import firebase from "./../assets/img/firebase.png";
import iconbootstrap from "./../assets/img/bootstrap.png";
import iconcss from "./../assets/img/css_3.png";
import icongithub from "./../assets/img/github.png";
import iconhtml from "./../assets/img/html-5.png";
import iconjavascript from "./../assets/img/javascript.png";
import iconreact from "./../assets/img/react.png";
import iconredux from "./../assets/img/redux.png";
import icontypescript from "./../assets/img/typescript.png";
import laravel from "./../assets/img/laravel.png";
import mysql from "./../assets/img/mysql.png";
import net from "./../assets/img/net.png";
import nextjs from "./../assets/img/nextjs.png";
import tailwind from "./../assets/img/tailwind.png";

const Skils = () => {
  const groups = [
    { title: 'Backend', items: [{img: aspnetmvc, label: 'ASP.NET MVC'}, {img: net, label: '.NET'}, {img: laravel, label: 'Laravel'}, {img: nextjs, label: 'Next JS'}, {img: firebase, label: 'Firebase'}, {img: mysql, label: 'Mysql'}] },
    { title: 'Frontend', items: [{img: iconhtml, label: 'HTML 5'}, {img: iconcss, label: 'CSS 3'}, {img: iconjavascript, label: 'Javascript'}, {img: icontypescript, label: 'Typescript'}, {img: tailwind, label: 'Tailwind CSS'}, {img: iconbootstrap, label: 'Bootstrap'}, {img: icongithub, label: 'Github'}, {img: iconreact, label: 'React.JS'}] },
    { title: 'Tools & Others', items: [{img: iconredux, label: 'Redux'}, {img: icongithub, label: 'GitHub'}, {img: iconbootstrap, label: 'Bootstrap'}, {img: tailwind, label: 'Tailwind'}, {img: iconreact, label: 'React'}] }
  ];

  return (
    <section id="skils" className="py-16 bg-gradient-to-tr from-[#021024] to-[#061827]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-8">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, idx) => (
            <div key={idx} className="bg-white/3 p-6 rounded-xl">
              <h3 className="text-xl text-white mb-4">{g.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {g.items.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                    <img src={s.img} alt={s.label} className="w-8 h-8" />
                    <span className="text-white">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skils