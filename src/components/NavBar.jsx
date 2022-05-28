import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
import logo from "../assets/images/giphy-logo-1.svg";
import SearchForm from "./SearchForm";

const NavBar = () => {
  return (
    <Header>
      <Link to="/" className="logo-header">
        <img src={logo} alt="" />
        <h1>Giffy</h1>
      </Link>
      <SearchForm />
      <Navigation>
        <ul
          className="navigation"
          onMouseMoveCapture={(e) => {
            document.querySelector(
              ".navigation"
            ).style.backgroundPositionX = `${e.clientX - 430}px`;
          }}
        >
          <Links>
            <Link to="#">Reactions</Link>
          </Links>
          <Links>
            <Link to="#">Sports</Link>
          </Links>
          <Links>
            <Link to="#">Entertainment</Link>
          </Links>
          <Links>
            <Link to="#">Artist</Link>
          </Links>
        </ul>
      </Navigation>
      <ButtonsContainer>
        <button className="upload-gif">Upload</button>
        <button className="sesion-user">
          <div className="container-login__svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
          </div>
          <div className="login-text">Login</div>
        </button>
      </ButtonsContainer>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  height: 80px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  justify-content: space-between;
  align-items: center;
  .logo-header {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }
`;

const Navigation = styled.nav`
  margin-right: 40px;
  ul {
    display: flex;
    margin: 0px;
    justify-content: space-around;
    list-style: none;
    background: linear-gradient(
        to right,
        rgb(0, 204, 255),
        rgb(153, 51, 255) 31%,
        rgb(230, 70, 182) 52%,
        rgb(255, 249, 170) 77%,
        rgb(0, 255, 153),
        rgb(0, 204, 255)
      )
      0% 50% / 180% 50%;
  }
`;

const Links = styled.li`
  cursor: pointer;
  padding: 0 12px;
  height: 33px;
  border-right: 5px solid rgb(18, 18, 18);
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  :last-child {
    border-right: none;
  }
  ::before {
    content: "";
    position: absolute;
    background-color: rgb(18, 18, 18);
    opacity: 1;
    inset: 0px -1px 4px;
    z-index: 1;
    transition: all 0.35s ease 0s;
  }
  :hover::before {
    opacity: 0.3;
  }
  a {
    z-index: 2;
    font-size: 14px;
  }
`;

const ButtonsContainer = styled.div`
  height: 33px;
  border: none;
  background-color: transparent;
  display: flex;
  .upload-gif {
    border: none;
    background-color: #1774ff;
    cursor: pointer;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    font-family: "Cascadia Code", sans-serif;
    width: 83px;
    height: 100%;
    margin: 0 5px;
    transition: all 0.35s ease 0s;
    :hover {
      background-color: #0d62ac;
    }
  }
  .sesion-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: #858585;
    cursor: pointer;
    color: #fff;
    font-family: "Cascadia Code", sans-serif;
    font-size: 13px;
    font-weight: bold;
    width: 120px;
    height: 100%;
    transition: all 0.35s ease 0s;
    margin: 0 5px;
    :hover {
      background-color: #5e5e5e;
    }
    .container-login__svg {
      background-color: #5e5e5e;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 7px;
      svg {
        fill: #fff;
        transform: scale(0.8);
      }
    }
  }

  .login-text {
    margin-right: 20px;
  }
`;
