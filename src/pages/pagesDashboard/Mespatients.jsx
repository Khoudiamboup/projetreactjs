import React from "react";
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";


export const Mespatients = () => {
  
  const handleVoirClick = (prenom) => {
    console.log(`Voir clicked for ${prenom}`);
  };

  const patients = [
    { id: 1, prenom: "Moustapha", nom: "Fall" },
    { id: 2, prenom: "Alimatou", nom: "Seck" },
    { id: 3, prenom: "Pathe", nom: "Fall" },
    { id: 4, prenom: "Cheikh Bara", nom: "Diop" }
  ];

  return (
    <div className="p-12">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold">Mes Patients</h2>
        <Link to="/Ajoutpatient">
        <button>
          <FaCirclePlus className="text-3xl font-bold text-sky-600" />
        </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border-b-2 border-slate-600 px-4 py-2">Prénom</th>
            <th className="border-b-2 border-slate-600 px-4 py-2">Nom</th>
            <th className="border-b-2 border-slate-600 px-4 py-2">Profil</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="border-b-2 border-slate-600 px-4 py-2">
                <div className="flex gap-5 py-2 items-center">
                  <span>
                    <HiUsers className="text-5xl text-black" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-black font-semibold">
                      {patient.prenom}
                    </span>
                  </div>
                </div>
              </td>
              <td className="border-b-2 border-slate-600 px-4 py-2">
                <div className="flex items-center">
                  <span className="text-black font-semibold">{patient.nom}</span>
                </div>
              </td>
              <td className="border-b-2 border-slate-600 px-4 py-2">
                <div className="flex items-center ">
                  <button
                    className="bg-green-800 w-32 p-3 text-white text-xl "
                    onClick={() => handleVoirClick(patient.prenom)}
                  >
                    Voir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
