import React from "react";
import { Link } from "react-router-dom";
import { SlSocialGoogle } from "react-icons/sl";

export const Connexion = () => {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen"></div>
      <div className="flex flex-col justify-start items-center w-2/4">
        <h2 className="text-6xl font-bold">Se Connecter</h2>
        <input className="w-full p-4 m-4 bg-slate-300" type="text" placeholder="Adresse mail" />
        <input className="w-full p-4 m-4 bg-slate-300" type="password" placeholder="Mot de passe" />
        <Link to="/dashboard" className="w-full">
          <button className="bg-sky-500 text-white py-2 rounded-xl text-xl font-bold w-full mb-4">
            Se Connecter
          </button>
        </Link>
        <Link to="/dashboard" className="w-full">
          <button className="bg-black my-2 flex items-center justify-center text-white py-2 rounded-xl text-xl font-bold w-full">
            Continuer avec Google
            <SlSocialGoogle className="mx-5" />
          </button>
        </Link>
        <div className="flex w-full indent-40 mb-4">
          <p className=" mt-14">Mot de passe oublié?</p>
          <Link to="/Inscrire">
            <button className=" text-blue-400 mt-14  text-xl">
              S'inscrire
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
