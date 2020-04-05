import React from 'react'
import classes from '../Footer/Footer.module.css'

function footer() {
    return(
        <div className={classes.footOverall}> 
                <h2 className={classes.h2}>Copyrights@2020</h2>
                <div className={classes.footInfo}>
                    <p href="#">About us</p>
                    <p href="#">Contact us</p>
                </div>
                <h3>Made with Love in Goa.</h3>
            </div>
    );
}
export default footer