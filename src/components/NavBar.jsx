import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";
import SearchForm from "./SearchForm";
import { motion } from "framer-motion";
import NavCategoriesRes from "./NavCategoriesRes";
import UploadModal from "./UploadModal";

const NavBar = () => {
  const [navSpinn, setNavSpinn] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <>
      <UploadModal isOpen={uploadModal} setIsOpen={setUploadModal} />
      <Header>
        <NavCategoriesRes navSpinn={navSpinn} setNavSpinn={setNavSpinn} />
        <Link to="/" className="logo-header">
          <svg height="40" width="40">
            <g fill="none" fillRule="evenodd">
              <path d="M6.331 4.286H17.99v15.428H6.33z" fill="#000" />
              <g fillRule="nonzero">
                <path d="M4 3.714h2.331v16.572H4z" fill="#04ff8e" />
                <path d="M17.989 8.286h2.331v12h-2.331z" fill="#8e2eff" />
                <path d="M4 19.714h16.32V22H4z" fill="#00c5ff" />
                <path d="M4 2h9.326v2.286H4z" fill="#fff152" />
                <path
                  d="M17.989 6.571V4.286h-2.332V2h-2.331v6.857h6.994V6.571"
                  fill="#ff5b5b"
                />
                <path d="M17.989 11.143V8.857h2.331" fill="#551c99" />
              </g>
              <path d="M13.326 2v2.286h-2.332" fill="#999131" />
            </g>
          </svg>
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
              <Link to="/search/reactions/g">Reactions</Link>
            </Links>
            <Links>
              <Link to="/search/sports/g">Sports</Link>
            </Links>
            <Links>
              <Link to="/search/entertaiment/g">Entertainment</Link>
            </Links>
            <Links>
              <Link to="/search/artist/g">Artist</Link>
            </Links>
          </ul>
        </Navigation>
        <ButtonsContainer>
          <button
            onClick={() => setUploadModal(!uploadModal)}
            className="upload-gif"
          >
            Upload
          </button>
          <button className="sesion-user" onClick={() => setUploadModal(!uploadModal)}>
            <div className="container-login__svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
              </svg>
            </div>
            <div className="login-text">Login</div>
          </button>
        </ButtonsContainer>
        <ButtonsContainerRes>
          <button className="upload-gif__res" 
            onClick={() => setUploadModal(!uploadModal)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <linearGradient
                  x1="10.615%"
                  y1="2.472%"
                  x2="90%"
                  y2="90.124%"
                  id="svg-upload"
                >
                  <stop stopColor="#00ff15" offset="0%"></stop>
                  <stop stopColor="#00ff6a" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#svg-upload)"
                d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"
              ></path>
              <path fill="url(#svg-upload)" d="m8 11-3 4h11l-4-6-3 4z"></path>
              <path
                fill="url(#svg-upload)"
                d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
              ></path>
            </svg>
          </button>
          <button className="sesion-user__res" onClick={() => setUploadModal(!uploadModal)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <linearGradient
                  x1="10.615%"
                  y1="2.472%"
                  x2="90%"
                  y2="90.124%"
                  id="svg-user"
                >
                  <stop stopColor="#fbff00" offset="0%"></stop>
                  <stop stopColor="#e5ff00" offset="100%"></stop>
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#svg-user)"
                d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
              />
            </svg>
          </button>
          <button className="nav-res" onClick={() => setNavSpinn(!navSpinn)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <linearGradient
                  x1="10.615%"
                  y1="2.472%"
                  x2="90%"
                  y2="90.124%"
                  id="svg-nav"
                >
                  <stop stopColor="#00ffff" offset="0%"></stop>
                  <stop stopColor="#00aeff" offset="100%"></stop>
                </linearGradient>
              </defs>
              <motion.path
                animate={{
                  d: !navSpinn
                    ? "M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"
                    : "m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z",
                }}
                fill="url(#svg-nav)"
              ></motion.path>
            </svg>
          </button>
        </ButtonsContainerRes>
      </Header>
    </>
  );
};

export default NavBar;

const Header = styled.header`
  height: 80px;
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
  @media (max-width: 1205px) {
    margin-bottom: 20px;
  }
  justify-content: space-between;
  align-items: center;
  .logo-header {
    display: flex;
    align-items: center;
    width: 223px;
    @media (max-width: 832px) {
      width: 140px;
    }
    svg {
      width: 28px;
      height: 25px;
      margin-right: 5px;
      transform: scale(1.5);
      @media (max-width: 861px) {
        transform: scale(1.3);
      }
    }
    h1 {
      @media (max-width: 861px) {
        font-size: 33px;
      }

      @media (max-width: 400px) {
        font-size: 28px;
      }
    }
  }
`;

const Navigation = styled.nav`
  margin: 0 20px;
  @media (max-width: 705px) {
    display: none;
  }
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
  width: 223px;
  @media (max-width: 832px) {
    display: none;
  }
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
    background-color: #494949;
    cursor: pointer;
    color: #fff;
    font-family: "Cascadia Code", sans-serif;
    font-size: 13px;
    font-weight: bold;
    width: 120px;
    height: 100%;
    transition: all 0.35s ease 0s;
    margin: 0 5px;
    @media (max-width: 877px) {
      width: 105px;
    }
    :hover {
      background-color: #424242;
    }
    .container-login__svg {
      background-color: #666666;
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

const ButtonsContainerRes = styled.div`
  height: 33px;
  width: 88px;
  border: none;
  background-color: transparent;
  display: none;
  @media (max-width: 832px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .upload-gif__res {
    border: none;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
    margin: 0 7px;
    transition: all 0.35s ease 0s;
    svg {
      transform: scale(1.4);
      margin-top: 4px;
    }
    @media (max-width: 320px) {
      transform: scale(0.8);
    margin: 0 4px;
    }
  }
  .sesion-user__res {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;
    transition: all 0.35s ease 0s;
    margin: 0 7px;
    svg {
      transform: scale(1.2);
    }
    @media (max-width: 320px) {
      transform: scale(0.9);
    margin: 0 4px;
    }
  }
  .nav-res {
    border: none;
    cursor: pointer;
    background-color: transparent;
    height: 100%;
    margin: 0 7px 0 5px;
    transition: all 0.35s ease 0s;
    svg {
      transform: scale(1.3);
    }
    @media (max-width: 320px) {
      transform: scale(0.9);
    margin: 0 4px;
    }
  }
`;
