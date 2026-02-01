import React from "react";
import {Link} from "react-router-dom";

type PageAccueilProp = {
    onLogout: () => void;
};

export default function PageAccueil({onLogout}: PageAccueilProp) {
  return (
    <div className="flex h-screen font-sans">
      
      <div className="w-1/4 bg-polytech flex flex-col justify-between text-white p-6">
        <div>
          <h2 className="text-center text-2xl mb-8">Bienvenue</h2>
          <ul className="space-y-6">
            <li className="bg-white text-polytech font-bold rounded-md py-2 px-4 text-center">
              Accueil
            </li>
            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              <Link to="/maquette"> Maquette </Link>
            </li>
            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              Simulation
            </li>
          </ul>
        </div>

        <button className="text-white text-left border-white hover:underline"
        onClick = {onLogout}>
          Log out
        </button>
      </div>

      
      <div className="flex-1 bg-white p-10">
        <h1 className="text-right text-gray-700 text-lg mb-10">
          Bienvenue <span className="font-semibold">Théo Rique</span>
        </h1>

        
        <div className="border-2 border-black p-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Info maquette de l'utilisateur
          </h2>

          <div className="border border-black inline-block px-4 py-2 mb-4">
            <span className="font-medium">NB ÉTUDIANTS</span>
          </div>

          <div className="border border-black p-4 mt-2">
            <p>Résumé charge horaire pour chaque module</p>
          </div>
        </div>
      </div>
    </div>
  );
}
