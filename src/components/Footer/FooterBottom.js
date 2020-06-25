import React from "react";
import classes from "../Footer/Footer.module.css";


function FooterBottom() {
  return (
      <div className={classes.footerBottom}>
        &copy; Copyrights@ {new Date().getFullYear()} | Made with ❤ in Goa.
      </div>
    
  );
}
export default FooterBottom;
