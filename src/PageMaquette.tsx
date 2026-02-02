/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { useAuth } from "./context/LogoutContext"

interface Promotion{
  id: number;
  nom: string;
  annee: string;
}

interface Module{
  id:number;
  heures_cm: number;
  heures_td: number;
  heures_tp: number;
}
interface Maquette{
  id: number;
  nom: string;
  nb_modules: number;
  promotion: Promotion;
  modules?: Module[];
}

/*interface LayoutProps {
  onLogout:() => void
}*/

//const LayoutProps: React.FC<Fonction> = ({onLogout}) => {

const Maquette: React.FC = () => {
  //const {logout} = useAuth()
  const [maquettes, setMaquettes] = useState<Maquette[]>([])
  const[selectedMaquette, setSelectedMaquette] = useState<Maquette | null > (null)



 //Fetch Adonis
  useEffect(() => {
    fetch("http://127.0.0.1:3333/testdb2")
      .then((res) => res.json())
      .then((data)=> { 
        console.log("Réponse Adonis:", data)
        setMaquettes(data)
      })
      .catch((err) => console.error("Erreur Fetch Adonis: ", err))
  }, []);

  
  const handleSelectMaquette = (id: number) => {
    fetch(`http://localhost:3333/maquettes/${id}`)
      .then(res => res.json())
      .then(setSelectedMaquette)
      .catch(console.error)
  }


  return (
    <div className="flex h-screen font-sans">
     
      <div className="w-1/4 bg-polytech flex flex-col justify-between text-white p-6">
   
        <div>
          <h2 className="text-center text-2xl font-semibold mb-8"> ChargeX </h2>

          <ul className="space-y-6">
            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              <NavLink to="/" className="block">Accueil</NavLink>
            </li>

            <li className="bg-white text-polytech font-bold rounded-md py-2 px-4 text-center">
              <NavLink to="/maquette" className="block">Maquette</NavLink>
            </li>

            <li className="hover:bg-sky-400 rounded-md py-2 px-4 cursor-pointer text-center">
              <NavLink to="/simulation" className="block">Simulation</NavLink>
            </li>
          </ul>
        </div>

       
        <NavLink
          to="/"
          className="border-2 border-white text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-white hover:text-polytech transition-all duration-200"
        >
          Log out
        </NavLink>
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

            onChange={(e) => {
              const id = parseInt(e.target.value);
              const maquette = maquettes.find((m) => m.id === id) || null;
              setSelectedMaquette(maquette);
            }}
          >
            <option value=""> Choisir une maquette </option>
            {maquettes.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nom}
              </option>
            ))}
          </select>
        </div>

        {selectedMaquette && (
        <div className="border-2 border-black p-6 max-w-2xl mx-auto rounded-md">
          <h2 className="text-xl font-semibold text-center mb-6">
           {selectedMaquette.nom}
          </h2>
          <p> Promotion: {selectedMaquette.promotion.nom} </p>
        
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
        )}</div>
    </div>
  );
}



export default Maquette;