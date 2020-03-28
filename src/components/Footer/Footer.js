import React from 'react'
import classes from '../Footer/Footer.module.css'

function footer() {
    return(
        <div className={classes.footOverall}> 
                <h1 className={classes.h1}>@Copyrights2020</h1>
                <ul className={classes.footInfo}>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
                <h3>Made with Love in Goa.</h3>
            </div>
    );
}
export default footer