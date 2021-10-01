import {Link , useRouteMatch,useLocation} from 'react-router-dom';

function Contact() {

  const {path,url} = useRouteMatch();
  

  console.log(path, url);
    return (
      
      <div>
        <div>
          Contact Page
          </div>

<div>
          <ul>
            <li >
            <Link to={`${path}/contact1`}> Contact 1</Link>  </li>
            <li>
            <Link to={`${path}/contact2`}> Contact 2</Link>
           </li>  
            <li>
            <Link to={`${path}/contact3`}> Contact 3</Link>
           </li> 
          </ul>
          </div>
        </div>
    );
  }
  
  export default Contact;
  