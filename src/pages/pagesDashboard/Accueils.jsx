import React from "react";
import { FaBell } from "react-icons/fa6";
import imgUser from "../../assets/user.png";
import SecondCard from "../../components/SecondCard";

export const Accueils = () => {
  const table = [
    {
      classess: "bg-blue-800 p-8 rounded-xl",
      numberss: "98", 
      textess: "Liste des Rendez-vouss",
    },
    {
      classess: "bg-green-900 p-8 rounded-xl",
      numberss: "62",
      textess: "Liste des Patients",
    },
    {
      classess: "bg-black p-8 rounded-xl",
      numberss: "98",
      textess: "Listes des Rendez-vous",
    },
    {
      classess: "bg-blue-300 p-8 rounded-xl",
      numberss: "62",
      textess: "Listes des Patients",
    },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between items-start py-5 ">
        <div className="w-2/4">
          <h2 className="text-sky-600 text-3xl font-bold">
            Bienvenue ! Docteur
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, sit? Beatae quo doloribus libero numquam consectetur alias hic sint iure in, ducimus, fugit distinctio eum velit magnam placeat minima nisi.
            
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <FaBell className="text-2xl" />
          <img src={imgUser} className="w-10" alt="" />
        </div>
      </div>
      <h2 className="text-7xl">Rendez-vous</h2>
      <div className="grid grid-cols-2 gap-5 my-5">
        {table.map((maman) => (
          <SecondCard
            classe={maman.classess}
            number={maman.numberss}
            texte={maman.textess}
          />
        ))}
      </div>
    </div>
  );
};
