import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import classes from "../index.css";

//buttons
import {
  FacebookShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

//icons
import {
  FacebookIcon,
  PinterestIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export default function ShareButtons(props) {
  return (
    <Grid container spacing="1" justify="center" alignItems="center">
      <Grid item>
        <Typography>Share: </Typography>
      </Grid>
      <Grid item>
        <FacebookShareButton
          url={props.url}
          hashtag="#recipe "
          quote={props.quote}
          className={classes.item}
        >
          <FacebookIcon size={30} round="true" />
        </FacebookShareButton>
      </Grid>
      <Grid item>
        <PinterestShareButton
          url={props.url}
          description="Guys check out this delicious recipe "
          media={props.pictureUrl}
          className={classes.item}
        >
          <PinterestIcon size={30} round="true" />
        </PinterestShareButton>
      </Grid>
      <Grid item>
        <WhatsappShareButton
          url={props.url}
          title={props.subject}
          separator=" "
          className={classes.item}
        >
          <WhatsappIcon size={30} round="true" />
        </WhatsappShareButton>
      </Grid>
      <Grid item>
        <EmailShareButton
          url={props.url}
          subject={props.subject}
          body="Check out this delicious recipe"
        >
          <EmailIcon size={30} round />
        </EmailShareButton>
      </Grid>
    </Grid>
  );
}

ShareButtons.prototype = {
  url: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
};
