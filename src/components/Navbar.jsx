import React from "react";
import Logo from "../assets/RVS 1.png";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={Logo} alt="image" />
        <nav>
          <ul className="flex">
            <li>
              <Link to="/"> Accueil</Link>
            </li>
            <li className="mx-20">
              <Link to="/dashboard/Mesrv">Mes Rendez Vous</Link>
            </li>
            <li>
              <Link to="/dashboard/compte">Mon Compte</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link to="/connexion">
          <button className="bg-sky-500 p-2 w-48 rounded-xl text-white text-xl">
            Connexion
          </button>
          </Link>
          
          <Link to="/connexion">
          <button className="mx-10 bg-black p-2 w-48 rounded-xl text-white text-xl">
            Deconnexion
          </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
