import React from 'react'
import classes from '../Footer/Footer.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
function footer() {
    return(
        <div className={classes.footOverall}> 
                <h2 className={classes.h2}>Copyrights@2020</h2>
                <div className={classes.footInfo}>
                    <p href="#">About us</p>
                    <p href="#">Contact us</p>
                </div>
                <h3>Made with Love in Goa <FavoriteIcon> </FavoriteIcon> </h3>
            </div>
    );
}
export default footer
