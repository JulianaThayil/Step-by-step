import React from "react";
import PropTypes from "prop-types";
//buttons
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

//icons
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function ShareButtons() {
  return (
    <div style={{ display: "flex" }}>
      <TwitterShareButton
        url="https://stepbystep.netlify.app/Rose/3cz6fkOfaNeIpGSyWDtJ"
        hashtag="#recipe"
      >
        <TwitterIcon size={24} round="true" />
      </TwitterShareButton>
      <FacebookShareButton
        url="https://stepbystep.netlify.app/Rose/3cz6fkOfaNeIpGSyWDtJ"
        hashtag="#recipe"
      >
        <FacebookIcon size={24} round="true" />
      </FacebookShareButton>
    </div>
  );
}
