import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import classes from '../index.css'

//buttons
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton
} from "react-share";

//icons
import { FacebookIcon, PinterestIcon,WhatsappIcon,EmailIcon } from "react-share";

export default function ShareButtons(props) {
  return (
    <div style={{ display: "flex",justifyContent:'center'}}>
      <Typography>Share: </Typography> 
      <FacebookShareButton
        url={props.url}
        hashtag="#recipe "
        quote={props.quote}
        className={classes.item}

      >
        <FacebookIcon size={27} round="true" />
      </FacebookShareButton>

      <PinterestShareButton
        url={props.url}
        description="Guys check out this delicious recipe "
        media={props.pictureUrl}
        className={classes.item}
      >
        <PinterestIcon size={27} round="true" />
      </PinterestShareButton>

      <WhatsappShareButton
        url={props.url}
        title={props.subject}
        separator=" "
        className={classes.item}
       
      >
        <WhatsappIcon size={27} round="true" />
      </WhatsappShareButton>

      <EmailShareButton
            url={props.url}
            subject={props.subject}
            body="Check out this delicious recipe"
          >
            <EmailIcon size={27} round />
          </EmailShareButton>


    </div>
  );
}

ShareButtons.prototype ={
  url:PropTypes.string.isRequired,
  quote:PropTypes.string.isRequired,
  subject:PropTypes.string.isRequired,
  pictureUrl:PropTypes.string.isRequired
}