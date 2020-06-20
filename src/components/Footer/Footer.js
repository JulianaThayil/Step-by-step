import React from "react";
import { Footer } from "components-extra";
import InfoIcon from '@material-ui/icons/Info';
import Email from "@material-ui/icons/Email";
import PolicyIcon from '@material-ui/icons/Policy';
import FooterBottom from "./FooterBottom";

export default function MyFooter() {
  return (
    <Footer title="StepChef" bottomBanner={FooterBottom}>
      <Footer.Column isInline>
        <Footer.Item icon={InfoIcon} href="about">
          About us
        </Footer.Item>
        <Footer.Item icon={PolicyIcon} href="#">
          Privacy policy
        </Footer.Item>
        <Footer.Item icon={Email} href="contact">
          Contact Us
        </Footer.Item>
      </Footer.Column>

    </Footer>
  );
}
