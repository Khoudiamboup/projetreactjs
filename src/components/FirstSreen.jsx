import React from "react";
import image1 from "../assets/image.png";
import { Link } from "react-router-dom";

export default function FirstSreen() {
  return (
    <div className="flex items-center px-10 overflow-hidden">
      <div>
        <h1 className="text-8xl mt-36 font-serif">Rendez-Vous</h1>
        <p className="my-6 w-2/3 mt-16 text-xl" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro quia vitae dolores et, excepturi dignissimos laboriosam quasi, dicta cum rem pariatur. Odio illum cum excepturi, nobis quae rem recusandae.

        </p>
        <Link to='/Inscrire'>
          <button className="bg-sky-500 text-white py-2 rounded-xl text-xl font-bold w-2/3 mt-10">
            Commencer
          </button>
        </Link>
        <div className="relative bottom-16">
          <div className="bg-sky-950 absolute right-5 rotate-45 w-32 h-48 rounded-xl"></div>
          <div className="bg-sky-500 absolute right-16 rotate-45 w-48 h-32 rounded-xl"></div>
        </div>
      </div>
      
      <div>
        <img src={image1} className="max-w-xl mt-10" alt="mon image" />
        <div className="relative bottom-16">
          <div className="bg-sky-950 absolute right-5 rotate-45 w-48 h-48 rounded-xl"></div>
          <div className="bg-sky-500 absolute right-16 rotate-45 w-48 h-48 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
