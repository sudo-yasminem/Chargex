import React from "react";

interface Simulation {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export default function Simulation({ onLogout, onNavigate }: Simulation) {
  return (
    <div className="flex h-screen font-sans">
      
      <div className="w-1/4 bg-sky-500 flex flex-col justify-between text-white p-6">
        <div>
          <div className="text-center text-2xl font-semibold mb-8">ChargeX</div>

          <ul className="space-y-2 text-lg">
            <li
              className="py-3 px-4 hover:bg-sky-400 cursor-pointer"
              onClick={() => onNavigate("accueil")}
            >
              Accueil
            </li>
            <li
              className="py-3 px-4 hover:bg-sky-400 cursor-pointer"
              onClick={() => onNavigate("maquette")}
            >
              Maquette
            </li>
            <li className="py-3 px-4 bg-sky-600 cursor-pointer">Simulation</li>
          </ul>
        </div>

        <div
          className="text-center py-4 cursor-pointer hover:bg-sky-400 border-t border-white"
          onClick={onLogout}
        >
          Log out
        </div>
      </div>

      
      <div className="w-3/4 flex flex-col justify-center items-center bg-white">
        <h1 className="text-sky-500 text-4xl font-bold mb-4">Page Simulation</h1>
        <p className="text-gray-600 text-lg">
          Simulation
        </p>
      </div>
    </div>
  );
}
