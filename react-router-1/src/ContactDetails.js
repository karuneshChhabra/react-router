import React from 'react';
import {useRouteMatch,useParams} from 'react-router-dom';


function ContactDetails() {
    let {path,url}  = useRouteMatch();
    console.log(path);
    
    console.log(url);
    let params  = useParams();
    console.log(params);
    
    return (
        <div>
            ContactDetails Page {params.contactId}
        </div>
    )
}

export default ContactDetails


