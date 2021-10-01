import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import ContactDetails from "./ContactDetails";
import { useState } from "react";

import About from "./About";

import App from "./App";

function Routers(props) {

  const [login,setLogin]= useState(false);
  return (
    <>
    
    <Router>
    <div>
        {/* <App /> */}
        {props.children}
        <hr/>
        <div>
          <button onClick={()=>{setLogin(!login)}}> Login -{login}
            </button>
        </div>

      </div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact/details" exact component={About}></Route>
        <Route path="/contact">
             <Contact/>

             {/* <Route path="/contact/:contactId" exact component={ContactDetails}></Route> */}

             <Route path="/contact/:contactId" exact component={()=>
           <ContactDetails login={login}
           ></ContactDetails>
          }/>

           



        </Route>
        
       
        <Route path="/about" sensitive component={About}></Route>

        <Route path="/About" sensitive component={Home}></Route>

        <Route path="/contact/list" exact component={Home}></Route>

        <Route path="*" component={Home}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default Routers;
