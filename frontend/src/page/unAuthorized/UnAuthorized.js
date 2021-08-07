import React from 'react'
import classes from "./UnAuthorized.module.css";

function UnAuthorized() {
    return (
        <div className={classes.container__unauthorized}>
            <p>401 | UnAuthorized 🚫 <span>( can not access resources )</span></p>
        </div>
    )
}

export default UnAuthorized
