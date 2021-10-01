import "./App.css";
import React,{useContext} from 'react';

import { Link } from "react-router-dom";

import {loginContext} from './Routers.js'


function App() {

  const login = useContext(loginContext);



  return (
   
      <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          {login && <li>
            <Link to="/contact">Contact</Link>
          </li>}

          {/* {login && <li>
            <Link to="/contact">Contact-r</Link>
          </li>} */}

          
        </ul>

        <hr />

      
      </div>
    
  );
}

export default App;
