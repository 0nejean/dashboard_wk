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
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <AiFillHome />
            Dashboard
          </Link>
        </li>
        <li className={location.pathname === "/marktet" ? "active" : ""}>
          <Link to="/market">
            <AiOutlineShoppingCart />
            NFT Marketplace
          </Link>
        </li>
        <li className={location.pathname === "/tables" ? "active" : ""}>
          <Link to="/tables">
            <BsBarChartFill />
            Tables
          </Link>
        </li>
        <li className={location.pathname === "/Kanban" ? "active" : ""}>
          <Link to="/kanban">
            <BiSolidDashboard />
            Kanban
          </Link>
        </li>
        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">
            <BsBarChartFill />
            {/* https://react-icons.github.io/react-icons/ */}
            Profile
          </Link>
        </li>
        <li className={location.pathname === "/signin" ? "active" : ""}>
          <Link to="/signin">
            <BsBarChartFill />
            Sign In
          </Link>
        </li>
      </ul>
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    li {
      position: relative;
      margin-left: 10px;
      // &::after {
      //   opacity: 0;
      //   transition: opacity 1s;
      // }
      &:active a {
        // hover 마우스 올렸을 때, active 마우스 클릭했을 때
        color: var(--primary-dark);
        font-weight: 700;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -32px;
          transform: translateY(-50%);
          width: 4px;
          height: 36px;
          border-radius: 25px;
          background: var(--primary);
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
        // gap 쓰면 디스플레이 플렉스 사이 간격 조정됨.
        color: var(--secondary-grey-600);
        font-weight: 500;
        &:hover {
          color: var(--primary-dark);
        }
      }
      svg {
        font-size: 20px;
        color: var(--primary);
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
