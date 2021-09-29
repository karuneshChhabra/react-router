import React,{useContext} from 'react';

import {useRouteMatch,Link} from 'react-router-dom';
import {loginContext} from './Routers.js'

function Contact() {
    let {path, url}  = useRouteMatch();
   
    const login = useContext(loginContext);
    console.log(login);
    console.log(path);
    
    console.log(url);

    return (
        <div>
            <div>
               Contact Page
            </div>
            <ul>
          <li>
            <Link to={`${path}/contact1`}>Contact 1</Link>
          </li>
          <li>
            <Link to={`${path}/contact2`}>Contact 2</Link>
          </li>
          {login && <li>
            <Link to={`${path}/contact3`}>Contact 3</Link>
          </li>}
        </ul>
        </div>
    )
}

export default Contact
