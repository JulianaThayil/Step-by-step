import React from 'react'
import classes from '../Footer/Footer.module.css'

function footer() {
    return(
        <div className={classes.footOverall}> 
                <h1 className={classes.h1}>Copyrights@2020</h1>
                <div className={classes.footInfo}>
                    <p href="#">About us</p>
                    <p href="#">Contact us</p>
                </div>
                <h3>Made with Love in Goa.</h3>
            </div>
    );
}
export default footer