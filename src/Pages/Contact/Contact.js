import React from 'react'
import Cover from '../../components/Cover/Cover'
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


export default function Contact() {
    const post={
        image:"/assets/contact.png",
        text:"Contact us"
    }
    return (
        <div>
            <Cover post={post}> </Cover>
            <div style={{marginLeft:'15vw',marginRight:'15vw'}}>
        <Typography align="center">
          {" "}
          CUSTOMER CARE: {" "}
        </Typography>
        <br />
        <Typography align="center"> Email: hello@stepchef.com</Typography>
        <br />
        <Typography align="center">Phone: +91 9552456310 </Typography>
        <br />
  
        <p align="center">
        Tell us more using <Link color="secondary" to="/contact"> this form</Link> ​
        </p>
        <br/>
        <img style={{marginLeft:'10vw'}} width="80%" height="80%" src="/assets/contact.svg" alt="vector"/>
      </div>
            
        </div>
    )
}
