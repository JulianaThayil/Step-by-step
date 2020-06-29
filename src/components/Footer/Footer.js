import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "components-extra";
import InfoIcon from "@material-ui/icons/Info";
import Email from "@material-ui/icons/Email";
import PolicyIcon from "@material-ui/icons/Policy";
import FooterBottom from "./FooterBottom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 activeclass:{
   color:'white',
   '&:hover': {
    color: 'white',
    textDecoration:'none',
},
'&:focus': {
  outline:'none',
},
 }
}));

export default function MyFooter() {
  const classes = useStyles();
  return (
    <Footer title="StepChef" bottomBanner={FooterBottom}>
      <Footer.Column isInline>
        <Link className={classes.activeclass} to="/about">
          <Footer.Item icon={InfoIcon}>About us</Footer.Item>
        </Link>
        <Footer.Item icon={PolicyIcon} href="#">
          Privacy policy
        </Footer.Item>
        <Link className={classes.activeclass} to="/contact">
          <Footer.Item icon={Email} >
            Contact Us
          </Footer.Item>
        </Link>
      </Footer.Column>
    </Footer>
  );
}
