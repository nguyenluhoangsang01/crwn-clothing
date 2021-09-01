import React from "react";
import { FooterWrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      &copy; Copyright {new Date().getFullYear()}
      crwn-clothing-gamma.vercel.app All rights reserved
    </FooterWrapper>
  );
};

export default Footer;
