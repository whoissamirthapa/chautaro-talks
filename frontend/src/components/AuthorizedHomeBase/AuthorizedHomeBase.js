import React from 'react'
import UnAuthorized from '../../page/unAuthorized/UnAuthorized';
import classes from './AuthorizedHomeBase.module.css';
import Navbar from '../HomeBase/navbar.js/index.js';

function AuthorizedHomeBase(props) {
    
    return (
        <React.Fragment>
            <div className={classes.home_base_container}>
                <Navbar />
            </div>
           
            <div className={classes.card_homebase_container}>
                { localStorage.getItem("cUser_token") ? 
                   <section>{props.children}</section> :
                <UnAuthorized /> }
            </div>
            
        </React.Fragment>
        
    )
}

export default AuthorizedHomeBase
