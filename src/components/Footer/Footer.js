import React from 'react'
import classes from '../Footer/Footer.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


function footer() {
    return(
        <div className={classes.footer}>

            <div className={classes.footerContent}>

                <div className={classes.footerSectionAbout}>
                    <h1 className={classes.logoText}><span>STEP</span>-BY-STEP</h1>
                    <p>
                        This is an easy recipe sharing website which is made 
                        for those who really love sharing their work and skill
                        baked right from their kitchens. Make an account and 
                        start your chopping into the world of STEP-BY-STEP.
                    </p>
                </div>

                <div className={classes.footerSectionChef}>
                    <img src="/assets/chef.jpg"></img>
                </div> 

                <div className={classes.footerSectionContact}>
                    <h1 className={classes.contact}>Contact us at:</h1><br/>
                    <span><h5 className={classes.phone}><FaPhoneVolume />   123-456-789</h5></span><br/>
                    <span><h5 className={classes.email}><IoMdMail />   xyz@gmail.com</h5></span><br/><br/>
                    

                    <div className={classes.socials}>
                        <a href="#"><i className={classes.facebook}><FaFacebook /></i></a>
                        <a href="#"><i className={classes.instagram}><FaInstagram /></i></a>
                        <a href="#"><i className={classes.twitter}><FaTwitter /></i></a>
                        
                    </div>
                </div>
            </div>

            <div className={classes.footerBottom}>&copy; Copyrights@2020 | Made with Love in Goa.</div>
        </div>


        /*<div className={classes.footOverall}> 
                <h2 className={classes.h2}>Copyrights@2020</h2>
                <div className={classes.footInfo}>
                    <p href="#">About us</p>
                    <p href="#">Contact us</p>
                </div>
                <h3>Made with Love in Goa <FavoriteIcon> </FavoriteIcon> </h3>
            </div>*/
    );
}
export default footer
