import React from "react";
import { Footer } from "components-extra";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Email from "@material-ui/icons/Email";
import FooterBottom from "./FooterBottom";

export default function MyFooter() {
  return (
    <Footer title="StepChef" bottomBanner={FooterBottom}>
      <Footer.Column isInline>
        <Footer.Item icon={AccountCircle} href="about">
          About us
        </Footer.Item>
        <Footer.Item href="#">
          Privacy policy
        </Footer.Item>
        <Footer.Item icon={Email} href="contact">
          Contact Us
        </Footer.Item>
      </Footer.Column>

    </Footer>
  );
}
