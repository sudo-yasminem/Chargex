import { useState } from "react"

import Login from "./Login";
import PageAccueil from "./PageAccueil";

function App(){
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handlelogin = () => {
    console.log("Login activé");
    setIsLoggedIn(true);
   };

   const handleLogout = () => {
    console.log("Logout activé");
    setIsLoggedIn(false);
   };

    return(
        <>
        {isLoggedIn ? (
          <PageAccueil onLogout={handleLogout}/>
        ) : (
          <Login onLogin={handlelogin} />
        )}
        </>
    );
}

export default App;