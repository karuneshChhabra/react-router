import React,{useEffect} from 'react';

import {useRouteMatch,useParams,useLocation,} from 'react-router-dom';


function ContactDetails(props) {
    let {path,url}  = useRouteMatch();
    let location = useLocation();
    console.log( location);

    console.log(path);
    console.log(props);
    
    console.log(url);
    let params  = useParams();
    console.log(params);

    

    const handleClick=(e)=>{
        console.log("clicked");
    }

    useEffect(()=>{
        document.addEventListener('click',handleClick);
        return () =>{
            document.removeEventListener('click',handleClick);
        }
    })
    
    return (
        <div>
            <div>
              ContactDetails Page {params.contactId}
            </div>
            <div>
                {props.children}

            </div>
        </div>
    )
}

export default ContactDetails


