import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";
import { motion } from "framer-motion";

const variant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "linear",
      type: "spring",
      damping: 12,
      mass: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: "220px",
  },
};

const NavCategoriesRes = ({ navSpinn, setNavSpinn }) => {
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      setNavSpinn(!navSpinn);
      setVisible(true);
    }, 400);
  };

  return (
    <>
      {navSpinn && (
        <Container onClick={closeModal}>
          <Navigation
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={variant}
          >
            <ContainerLinks>
              <Link to="/search/reactions/g" onClick={closeModal}>Reactions</Link>
              <Link to="/search/sports/g" onClick={closeModal}>Sports</Link>
              <Link to="/search/entertaiment/g" onClick={closeModal}>Entertainment</Link>
              <Link to="/search/artist/g" onClick={closeModal}>Artist</Link>
            </ContainerLinks>
            <CloseButton onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </CloseButton>
          </Navigation>
        </Container>
      )}
    </>
  );
};

export default NavCategoriesRes;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background: #00000042;
  z-index: 3;
`;

const Navigation = styled(motion.div)`
  width: 75%;
  background-color: #fff;
  height: 100vh;
  position: relative;
`;

const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-top: 10px;
  padding: 26px 0;
  a {
    color: #000;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    font-size: 15px;
    transition: all ease .5s;
    :hover{
      color: #fff;
      background-color: #5b5b5b;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  border-radius: 3px;
  right: 20px;
  background-color: #107cdb;
  display: grid;
  place-items: center;
  cursor: pointer;
  svg{
    width: 24px;
    height: 24px;
    fill: #fff;
    transform: scale(1.1);
  }
`
