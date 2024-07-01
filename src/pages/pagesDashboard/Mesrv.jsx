import React from "react";
import { TopNav } from "../../components/TopNav";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

import { PiUserCircleFill } from "react-icons/pi";


export const Mesrv = () => {
    
  const date = new Date().toDateString();
  const heure = new Date().toLocaleTimeString();

  return (
    <div className="p-12">
      <TopNav />
      <div className="flex justify-between items-center my-10">
        <h2 className="text-3xl font-bold">Mes Rendez-vous</h2>
        <Link to="/Ajoutrv">

        <button>
          <FaCirclePlus className="text-3xl font-bold text-sky-500" />
        </button>
        </Link>
      </div>
      <table class="table-auto w-full border-slate-500">
        <tbody>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <PiUserCircleFill />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Moussa Ba</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <HiUsers  />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Equipe xarala</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <HiUsers />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Reunion d affaire</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td class="border-b-2 border-slate-600">
              <div className="flex gap-5 py-4 items-center">
                <span>
                  <PiUserCircleFill  />
                </span>
                <div className="flex flex-col">
                  <span>{date}</span>
                  <span className="text-sky-600 font-semibold">Pathe Fall</span>
                </div>
              </div>
            </td>
            <td class="border-b-2  border-slate-600">
              <div className="flex items-end flex-col">
                <span>{heure}</span>
                <button>
                  <span className="text-sky-600 text-2xl            font-semibold">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
