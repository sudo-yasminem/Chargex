import React from "react";
import { Link } from "react-router-dom"


const Maquette: React.FC = () => {
  return (
    <div className="flex h-screen font-sans">
     
      <div className="w-1/4 bg-polytech flex flex-col justify-between text-white p-6">
   
        <div>
          <h2 className="text-center text-2xl font-semibold mb-8">
            ChargeX
          </h2>

          <ul className="space-y-6">
            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              <Link to="/" className="block">Accueil</Link>
            </li>

            <li className="bg-white text-polytech font-bold rounded-md py-2 px-4 text-center">
              <Link to="/maquette" className="block">Maquette</Link>
            </li>

            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              <Link to="/simulation" className="block">Simulation</Link>
            </li>
          </ul>
        </div>

       
        <Link
          to="/"
          className="border-2 border-white text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-white hover:text-polytech transition-all duration-200"
        >
          Log out
        </Link>
      </div>

    
      <div className="flex-1 bg-white p-10 overflow-auto">
      
        <h1 className="text-right text-gray-700 text-lg mb-10">
           <span className="font-semibold">Théo Rique</span>
           <br></br>
           <span className="font-semibold">Username:
           </span>
        </h1>

        
        <div className="mb-10">
          <label
            htmlFor="maquette-select"
            className="text-lg font-medium text-gray-700 mr-4"
          >
            Sélection de la maquette :
          </label>

          <select
            id="maquette-select"
            className="border border-gray-400 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option>Sélection maquette</option>
            <option>3A FISE IE 2025-2026</option>
            <option>3A FISE MDD 2025-2026</option>
            <option>3A FISE SE 2025-2026</option>
            <option>3A FISA CYBER 2025-2026</option>
            <option>3A FISA IOT 2025-2026</option>
            <option>3A FISA CND 2025-2026</option>
          </select>
        </div>

        
        <div className="border-2 border-black p-6 max-w-2xl mx-auto rounded-md">
          <h2 className="text-xl font-semibold text-center mb-6">
            NOM MAQUETTE
          </h2>

          <div className="space-y-4 text-center">
            <p>NB GROUPE CM : exemple</p>
            <p>NB GROUPE TD : exemple</p>
            <p>NB GROUPE TP : exemple</p>
          </div>
          <br></br>
          
          <label> Liste des enseignants</label>
          <select 
            id="prof-select"
            className="border border-gray-400 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option>ELECTRONIQUE - Mme Aude JAVEL </option>
            <option>MATHEMATIQUES - M Jean CAISSETOU</option>
            <option>INFORMATIQUE - M Charles MEUNIER</option>
          </select>
            
            <br>
            </br>
            <label>Liste des intervenants extérieurs</label>
            <select
            id="intervenants-select"
            className="border border-gray-400 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option>Liste d’intervenants extérieurs</option>
            <option></option>
            <option>ELECTRONIQUE - Mme Aude JAVEL </option>
            <option>MATHEMATIQUES - M Jean CAISSETOU</option>
            <option>RSE - Mme Ines PERE</option>
            
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default Maquette;