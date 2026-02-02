import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"

import Login from "./Login";
import PageAccueil from "./PageAccueil";
import Maquette from "./PageMaquette";
import Simulation from "./PageSimulation";
import { LogoutContext } from "./context/LogoutContext";

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
      <LogoutContext.Provider value={{logout: handleLogout}}>
        <Router>
          <Login onLogin={handleLogin} />
        </Router>
      </LogoutContext.Provider>
    );
   }

    return (
      <Router>
          <Routes>
          {/*IF not connected, go to Login*/} 
            <Route path="/login" element={
              <Login onLogin={handleLogin}/>
            }/>
              
          

          {/*Route Page accueil*/} 
            <Route path="/" element={<PageAccueil onLogout={handleLogout}/>} />
              
          {/*Route Page Maquette*/} 
            <Route path="/maquette" element={<Maquette onLogout={handleLogout}/>} />

          {/*Route Page Simulation*/}
          <Route path="/simulation" element={<Simulation onLogout={handleLogout}/>} />

          {/*Default*/}
          <Route path="*" element={<PageAccueil onLogout={handleLogout}/>} />
          
        


          </Routes>
        </Router>
      );
    }

export default App;