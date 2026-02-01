import React, {useState} from "react";
import logo from "./assets/logo_polytech.jpg";


type LoginProp = {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProp) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login activé");

    onLogin();
};


return (
    <div className= "flex h-screen font sans">
        <div className="w-1/3 bg-polytech flex items-center justify-center">
             <img className="mx-auto" src={logo} alt="" width="auto" height="auto"></img>
        </div>

    <div className="w-2/3 flex flex-col justify-center items-center bg-white">
        <h2 className="text-sky-500 text-3xl font-semibold mb-8">ChargeX</h2>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 w-80 text-sky-500"
        >

            <div className="flex flex-col">
                <label className="mb-1 text-lg">
                   Identifiant
                </label>
                <input
                id="Identifiant"
                type="id"
                value={id}
                onChange = {(e) => setId(e.target.value)}
                className="border-2 border-sky-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
                required
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="mb-1 text-lg">
                Password
                </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-sky-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 mt-4"
          >
            Login
          </button>

        </form>
    </div>
</div>
);
}




