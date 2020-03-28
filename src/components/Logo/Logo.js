import React from 'react';
import classes from './Logo.module.css';
const logo =()=>
{
    return(
          <div className={classes.logo} >
          <img  width="5%" height="5%" src="/logo.png"></img>
           <b> <h4 className={classes.h3}>Step-by-Step </h4></b>
        </div>
    )
}
export default logo;