import React from 'react';
import {useRouteMatch,useParams,useLocation ,useHistory} from 'react-router-dom';

function ContactDetails(props) {

    console.log(props);
    const {path,url} = useRouteMatch();
    const {contactId}= useParams();
    const location= useLocation();
    const history = useHistory();
    console.log(history);
    console.log(location);
   
    return (
        <div>
            Contact Details {contactId}

            {location.pathname ==='/contact/contact1' && <button
            onClick={()=>{history.goBack()}}>Go Back!!
                </button>}

                <button
            onClick={()=>{history.push('/contact')}}>Go!!
                </button>   
            
        </div>
    )
}

export default ContactDetails
