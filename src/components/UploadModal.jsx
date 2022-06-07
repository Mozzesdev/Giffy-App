import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const variant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
      type: "spring",
      damping: 7,
      mass: 1.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "-80px",
  },
};

const UploadModal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setVisible(true);
    }, 400);
  };

  const [visible, setVisible] = useState(true);
  return (
    <>
      {isOpen && (
        <Overlay onClick={closeModal}>
          <ContainerModal
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            variants={variant}
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerContent>
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 1 16 20">
                <defs>
                  <linearGradient
                    x1="10.615%"
                    y1="10.472%"
                    x2="50%"
                    y2="90.124%"
                    id="upload_coming"
                  >
                    <stop stopColor="#21bceb" offset="0%"></stop>
                    <stop stopColor="#1477f8f8" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#upload_coming)"
                  d="M13 19v-4h3l-4-5-4 5h3v4z"
                ></path>
                <path
                  fill="url(#upload_coming)"
                  d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z"
                ></path>
              </svg> */}
              <h2>
                <span className="index__coming">Coming</span>{" "}
                <span className="index__soon">Soon.</span>
              </h2>
              <button onClick={closeModal}>Close</button>
            </ContainerContent>
          </ContainerModal>
        </Overlay>
      )}
    </>
  );
};

export default UploadModal;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007e;
  z-index: 10;
`;

const ContainerModal = styled(motion.div)`
  background-color: #000000;
  border: 3px solid #ffffff46;
  width: 700px;
  height: 390px;
  border-radius: 8px;
  color: #fafafa;
  button {
    border: none;
    background-color: #0062ff;
    color: #ffffff;
    padding: 6px 20px;
    border-radius: 5px;
    font-size: 15px;
    font-family: "Roboto Mono", monospace;
    cursor: pointer;
    margin-top: 30px;
    transition: all ease 0.3s;
    :hover {
      background-color: #0b58d4;
      transform: scale(1.06);
    }
  }
  @media (max-width: 1074px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    width: 500px;
    height: 320px;
  }
  @media (max-width: 550px) {
    width: 500px;
    height: 270px;
    button {
      padding: 4px 15px;
      font-size: 14px;
      margin: 10px 0;
    }
  }
  @media (max-width: 330px) {
    height: 220px;
    button {
      padding: 4px 15px;
      font-size: 12px;
      margin: 10px 0 25px 0;
    }
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 40px;
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    transform: scale(2);
  }
  h2 {
    font-size: 70px;
    margin-bottom: 20px;
    letter-spacing: -0.1em;
    font-family: "Roboto Mono", monospace;
    width: 100%;
    span {
      position: relative;
      padding: 0 2px;
    }
    span::before {
      background: linear-gradient(90deg, #31d4dd, #005efff8);
      position: absolute;
      inset: 0;
      -webkit-text-fill-color: transparent;
    }
    .index__coming::before {
      content: "Coming";
      background: linear-gradient(90deg, #19ea73, #def22af8);
      -webkit-background-clip: text;
      animation: colorTrans 6s infinite 0s;
    }
    .index__soon::before {
      content: "Soon.";
      background: linear-gradient(90deg, #ead919, #f2452af8);
      -webkit-background-clip: text;
      animation: colorTrans 6s infinite 2s;
    }
  }
  @media (max-width: 1074px) {
    h2 {
      font-size: 60px;
    }
    svg {
      transform: scale(1.6);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 50px;
    }
    svg {
      transform: scale(1.4);
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 40px;
    }
    svg {
      transform: scale(1.2);
    }
  }
  @media (max-width: 330px) {
    h2 {
      font-size: 28px;
    }
    svg {
      transform: scale(1.1);
    }
  }

  @keyframes colorTrans {
    0%,
    30%,
    100% {
      opacity: 1;
    }

    60%,
    83.333% {
      opacity: 0;
    }
  }
`;
