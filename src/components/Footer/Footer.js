import React from 'react'
import classes from '../Footer/Footer.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
function footer() {
    return(
        <div className={classes.footOverall}> 
        <Typography>
                <h1 className={classes.h1}>Copyrights@2020</h1>
                </Typography>
                
                <Typography className={classes.footInfo}>
                    <h6 href="#">About us:</h6>
                    <h6 href="#">Contact us:</h6>
                </Typography>
                    <br/>
                <Typography>
                <h3>Made with Love in Goa <FavoriteIcon></FavoriteIcon></h3>
                </Typography>

         </div>
            
    );
}
export default footer