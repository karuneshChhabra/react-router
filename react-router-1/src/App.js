import "./App.css";
import React,{useContext} from 'react';

import { Link } from "react-router-dom";


export const loginContext = React.createContext("login");


function App() {

  const login = useContext(loginContext);

  return (
   
      <div >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {login && <li>
            <Link to="/contact">Contact</Link>
          </li>}
        </ul>

        <hr />

      
      </div>
    
  );
}

export default App;
