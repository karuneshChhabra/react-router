import React,{useContext} from 'react';

import {useRouteMatch,Link ,useHistory} from 'react-router-dom';
import {loginContext} from './Routers.js'

function Contact() {
    let {path, url}  = useRouteMatch();
   
    const login = useContext(loginContext);

    const history= useHistory();


    console.log(login);
    console.log(path);
    
    console.log(url);

    return (
        <div>
            <div>
               Contact Page
            </div>
            <button onClick={()=>{history.goBack()}}> Back Button </button>
            
            <ul>
          <li key='contact1'>
            <Link key='contact1' to={`${path}/contact1`}>Contact 1</Link>
          </li>
          <li key='contact2'>
            <Link key='contact2' to={`${path}/contact2`}>Contact 2</Link>
          </li>
          {login && <li key='contact3'>
            <Link key='contact3' to={`${path}/contact3`}>Contact 3</Link>
          </li>}
        </ul>
        </div>
    )
}

export default Contact
