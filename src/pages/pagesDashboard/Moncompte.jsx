import React from "react";
import { TopNav } from "../../components/TopNav";
import { Link } from "react-router-dom";
export const Moncompte = () => {
  return (
    <div className="p-5 ml-20 mt-10 ">
      <h1 className="text-7xl text-blue-500 indent-[20%]" >Rendez-vous</h1>
      <div className="flex items-center w-full p-2 ">
          <div className="relative  w-40 h-40 rounded-full overflow-hidden border-8 border-[#1998D3] flex-shrink-0">
            <TopNav/>
          </div>
          <div className="  flex items-center w-full h-20 bg-[#1998D3] pl-4  -ml-4 ">
            <h2 className="text-white">Mon compte</h2>
          </div>
        </div>
        <div className="indent-52">
          <div>
        <input className="w-1/3 p-10  border-solid border-2 border-black" type="text"
         placeholder="Doctor N'diaye " />
      </div><br />
      <div><input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
         placeholder="Adresse" /></div><br />
         <div>
         <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
         placeholder="Telephone" />
         </div><br />
         <div>
         <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
         placeholder="Adresse mail" />
         </div><br/>
         <div>
         <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
         placeholder="Mot de passe" />
         </div>
      </div>
      <div><br />
      <Link to="/Ajoutcompte">

      <button className="bg-blue-500 text-white py-2 rounded-md text-xl font-bold w-1/3 ml-52">
            Enregistrer
          </button>
        </Link>
      </div>
      <div className="relative bottom-16">
      <div className="bg-sky-950 absolute right-5 rotate-45 w-32 h-48 rounded-xl"></div>
      <div className="bg-sky-500 absolute right-16 rotate-45 w-48 h-32 rounded-xl"></div>
        </div>
      </div>
      

      
  );
};
