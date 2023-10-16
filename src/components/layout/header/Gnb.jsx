import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWapper>
      <ul>
        {/* <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">홈</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">소개</Link>
        </li> */}
        <li>
          <Link to="/about">
            <AiFillHome />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about">
            <AiOutlineShoppingCart />
            NFT Marketplace
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BsBarChartFill />
            Tables
          </Link>
        </li>
        <li>
          <Link to="/about">
            <BiSolidDashboard />
            Kanban
          </Link>
        </li>
        <li>
          <Link to="/about">Profile</Link>
        </li>
        <li>
          <Link to="/about">Sign In</Link>
        </li>
      </ul>
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    li {
      margin-left: 10px;
      a {
        color: #333;
        &:hover {
          color: #ffaad2;
          font-weight: 700;
        }
      }
    }
  }
  &.active {
    // Add styles for the active state
    color: #ffaad2;
    font-weight: 700;
  }
`;

export default Gnb;
