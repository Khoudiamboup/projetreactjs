import React from "react";
import { Navbar } from "./components/Navbar";
import FirstSreen from "./components/FirstSreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "./pages/auth/Connexion";
import { Inscrire } from "./pages/auth/Inscrire";
import { About } from "./pages/auth/About";
import { Contact } from "./pages/auth/Contact";
import { NoPage } from "./pages/auth/NoPage";
import Dashboard from "./components/Dashboard";
import { SecondDashboard } from "./components/SecondDashboard";
import { Accueils } from "./pages/pagesDashboard/Accueils";
import { Mesrv } from "./pages/pagesDashboard/Mesrv";
import { Mespatients } from "./pages/pagesDashboard/Mespatients";
import { Moncompte } from "./pages/pagesDashboard/Moncompte";
import { Ajoutpatient } from "./pages/pagesajout/Ajoutpatient";
import { Ajoutrv } from "./pages/pagesajout/Ajoutrv";
import { Ajoutcompte } from "./pages/pagesajout/Ajoutcompte";




function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<FirstSreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/Inscrire" element={<Inscrire />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          {/* pageajout */}
            <Route path="/Ajoutrv" element={<Ajoutrv />} />
            <Route path="/Ajoutcompte" element={<Ajoutcompte />} />
            <Route path="/Ajoutpatient" element={<Ajoutpatient />} />




          {/* dashboard */}

            <Route path="/dashboard" element={<SecondDashboard />}>
            <Route index element={<Accueils />} />
            <Route path="/dashboard/Mesrv" element={<Mesrv />} />
            <Route path="/dashboard/patients" element={<Mespatients />} />
            <Route path="/dashboard/compte" element={<Moncompte />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ >
  );
}

export default App;


