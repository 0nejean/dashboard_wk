import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Divider, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <HeaderWapper>
      <HeaderStyle as="h1" className="logo">
        <Link to="/">
          <span>horizon</span> free
        </Link>
      </HeaderStyle>
      <Divider my={8} background="var( --link-default)" />
      <Gnb />
    </HeaderWapper>
  );
};

const HeaderStyle = styled(Heading)`
  /* font-size: 1rem; */
  /* color: var(--white); */
  a {
    display: block;
    transition: color 0.3s ease-in-out;
    text-transform: uppercase;
    text-align: center;
    font-size: 26px;
    color: var(--primary-dark);
    span {
      font-weight: 700;
    }
    &:hover {
      color: var(--primary);
    }
  }
`;

const HeaderWapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 290px;
  padding: 50px 32px;
  background-color: var(--white);
`;

export default Header;
