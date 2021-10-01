import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

import ContactDetails from "./ContactDetails";
import App from "./App";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  MemoryRouter,
  HashRouter
} from "react-router-dom";

export const loginContext = React.createContext("login");

function Routers() {
  const [login, setLogin] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  return (
    <div>
      <loginContext.Provider value={login}>
        <h1>Login {login}</h1>
        <button onClick={() => setLogin(!login)}>
          {login ? <span>Logout</span> : <span>LogIn</span>}
        </button>
        <br/>
        <br/>
        <button onClick={() => setAdmin(!isAdmin)}>
          {isAdmin ? <span>I am Admin</span> : <span>I am a user only</span>}
        </button>
     

        <Router>
          <App />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="/about" exact component={About} /> */}

           

         
            <Route    path="/about"    component={About}    sensitive/>

            <Route    path="/About"    component={Home}    sensitive/>

            <Redirect  from="/user"
                 to="/"
                >
                  <NoMatch />
                </Redirect>
            
            <Route path="/contact" sensitive={true}>
              {login ? (
                <>
                  <Contact />
                  <hr />
                  {/* <Switch> */}
                    <Route path="/contact/:contactId" exact>
                      <ContactDetails value={login}/>
                    </Route>

                     {/* <Route path="/contact/:contactId" 

                    render={renderProps => (
                      <div>
                      <ContactDetails name={renderProps.match.params.contactId}>
                      
                        </ContactDetails >
                      </div>
 )}/> */}
  
                  {/* </Switch> */}
                </>
              ) : (
                <Redirect
                  to={{
                    pathname: "/nomatch",
                  }}
                >
                  <NoMatch />
                </Redirect>
              )}
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </loginContext.Provider>
    </div>
  );
}

export default Routers;
