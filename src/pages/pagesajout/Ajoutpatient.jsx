import React from 'react'
import { Link } from 'react-router-dom';

export const Ajoutpatient = () => {
  return (
    <div>
      <div className="relative bottom-16 mt-40">
      <div className="bg-sky-100 absolute right-5 rotate-45 w-64 h-64 rounded-full -mt-40 mr-96 indent-52"></div>
      </div>
      
      <div className="indent-96 ml-96 mt-72">
      <div className=" rounded-full ">
        <div>
          <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
            placeholder="Prenom " />
        </div><br />
        <div><input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
          placeholder="Nom" /></div><br />
        <div>
          <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
            placeholder="Age" />
        </div><br/>
        <div>
          <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
            placeholder="Adresse" />
        </div><br />
        <div>
          <input className="w-1/3 p-2  border-solid border-2 border-black" type="text"
            placeholder="Telephone" />
        </div>
      </div>
      <div><br />
      <Link to="/dashboard/patients">
        <button className="bg-blue-500 text-white py-2 rounded-md text-xl font-bold w-1/3 ml-96">Valider
        </button>
        </Link>
      </div>
      <div className="relative bottom-16">
      <div className="bg-sky-200 absolute right-5 rotate-45 w-72 h-72 rounded-xl"></div>
      <div className="bg-sky-100 absolute right-16 rotate-45 w-72 h-72 rounded-xl"></div>
      </div>
    </div>
    </div>

  );
};
