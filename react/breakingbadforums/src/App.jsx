//ENRUTAMIENTOOO
import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import "https://fonts.google.com/specimen/Archivo";
import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { response } from "express";
import Characters from "./pages/Characters";

function App() {
  
  const [characters, setCharacters] = useState([]);

  const initialUrl="https://www.breakingbadapi.com/api/characters"

  const fecthCharacters = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  };
  useEffect(()=>{
    fecthCharacters(initialUrl);
  }, []);

  return(
    <div>
     <Navbar></Navbar>
     <div className="container">
      <Characters characters={characters} />
     </div>
     </div>
  )

}

export default App
