// src/components/Layout/Footer/Footer.jsx
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>footer</p>
    </FooterWrapper>
  );
};

//const 변수명 = styled.태그명``;
const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: #eee;
`;

export default Footer;
