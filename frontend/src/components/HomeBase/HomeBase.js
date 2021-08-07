import React from 'react'
import classes from './HomeBase.module.css';
import Navbar from './navbar.js/index.js';

function HomeBase(props) {
    
    return (
        <React.Fragment>
            <div className={classes.home_base_container}>
                <Navbar />
            </div>
            <div className={classes.card_homebase_container}>
               {props.children}
            </div>
            
        </React.Fragment>
        
    )
}

export default HomeBase
