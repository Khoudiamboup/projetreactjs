// import React from "react";
// import { BsFillBellFill } from "react-icons/bs";
// import userphoto from "../assets/user.png";
// import Card from "../components/Card";

// const Accueil = () => {
//   const table = [
//     {
//       className: "bg-sky-700 p-10",
//       number: "98",
//       text: "Liste des rendez-vous",
//     },
//     {
//       className: "bg-green-700 p-10",
//       number: "76",
//       text: "Liste des patients",
//     },
//     {
//       className: "bg-purple-700 p-10",
//       number: "29",
//       text: "Liste des client",
//     },
//     {
//       className: "bg-yellow-700 p-10",
//       number: "49",
//       text: "Liste des employers",
//     },
//   ];
//   return (
//     <div className="p-8">
//       <div className="flex justify-between gap-5">
//         <div className="w-1/2">
//           <h2 className="text-3xl font-bold text-sky-600">Bienvenu! Docteur</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//             Voluptatem, aspernatur error! Nisi voluptatum omnis, a unde soluta
//             perferendis nam iste alias nulla tempore in eligendi ipsa magnam vel
//             minima impedit?
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <BsFillBellFill className="text-3xl" />
//           <img className="w-14" src={userphoto} alt="user" />
//         </div>
//       </div>

//       <h2 className="text-7xl my-5">Rendez-Vous</h2>
//       <div className="grid grid-cols-2 gap-5">
//         {table.map((awa) => {
//           return (
//             <Card
//               className={awa.className}
//               number={awa.number}
//               text={awa.text}
//             />
//           );
//         })}
//         {/* <Card className="bg-green-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-sky-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-red-700 p-10" number="98" text='bonsoir awa' />
//         <Card className="bg-pink-800 p-10" number="98" text='bonsoir awa' /> */}
//       </div>
//     </div>
//   );
// };

// export default Accueil;
