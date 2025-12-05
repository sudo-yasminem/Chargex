import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"

import Login from "./Login";
import PageAccueil from "./PageAccueil";
import Maquette from "./PageMaquette";

function App(){
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogin = () => {
    console.log("Login activé");
    setIsLoggedIn(true);
   };

   const handleLogout = () => {
    console.log("Logout activé");
    setIsLoggedIn(false);
   };

   if (!isLoggedIn){
    return(
      <Router>
        <Login onLogin={handleLogin} />
      </Router>
    );
   }

    return (
      <Router>
          <Routes>
            <Route path="/" element={<PageAccueil onLogout={handleLogout} />} />
            <Route path="/maquette" element={<Maquette />} />
          </Routes>
        </Router>
      );
    }

export default App;