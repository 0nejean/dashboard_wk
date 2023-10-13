// src/components/Layout/Header/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderStyle as="h1">
        <Link to="/">logo</Link>
      </HeaderStyle>
      <Gnb />
    </HeaderWrapper>
  );
};

//const 변수명 = styled.태그명``;
const HeaderStyle = styled(Heading)`
  font-size: 30px;
  color: var(--white);
`;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  align-items: center;
  background-color: var(--primary);
  width: 100px;
  padding: 30px;
`;

export default Header;
