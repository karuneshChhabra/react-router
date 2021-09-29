import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

import ContactDetails from "./ContactDetails";
import App from "./App";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export const loginContext = React.createContext("login");

function Routers() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <loginContext.Provider value={login}>
        <button onClick={() => setLogin(!login)}>
          {login ? <span>Logout</span> : <span>LogIn</span>}
        </button>

        <Router>
          <App />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact component={About} />
            <Route path="/contact">
             {login ?
              <>
              <Contact />
              <hr />
              <Switch>
                <Route path="/contact/:contactId" exact>
                  <ContactDetails />
                </Route>
              </Switch>
              </> :
              <Redirect
               to={{
                 pathname: "/nomatch",
               
               }} >
                    <NoMatch />
               </Redirect>
            
              }
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
