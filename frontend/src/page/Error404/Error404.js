import React from 'react'
import classes from "./Error404.module.css";

function Error404() {
    return (
        <div className={classes.container_not_found}>
            <p>404 | Page not found <span>( can not found this page )</span></p>
        </div>
    )
}

export default Error404
