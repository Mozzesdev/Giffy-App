import React from "react";
import styled from "styled-components";

const RelatedGifs = ({ tag }) => {

  return (
    <>
      <ContainerRelated>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="4 2 16.5 20"
        >
          <defs>
            <linearGradient
              x1="10.615%"
              y1="2.472%"
              x2="90%"
              y2="90.124%"
              id="arrow-down"
            >
              <stop stopColor="#0fdb9d" offset="10%"></stop>
              <stop stopColor="#09a5ff" offset="60%"></stop>
              <stop stopColor="#0e6ca3" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#arrow-down)"
            d="M16.278 2.231a1.001 1.001 0 0 0-.64-.231H5a2 2 0 0 0-2 2v7.21a2 2 0 0 0 1.779 1.987L12 14v6a2 2 0 0 0 4 0V8l3.03 1.212a2.001 2.001 0 0 0 2.641-1.225l.113-.34a.998.998 0 0 0-.309-1.084l-5.197-4.332z"
          ></path>
        </svg>
      <h2>Related Gifs</h2>
      </ContainerRelated>
    </>
  );
};

export default RelatedGifs;

const ContainerRelated = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    transform: scale(1);
    transition: all ease 0.3s;
    cursor: pointer;
    height: 50px;
    width: 50px;
    :hover {
      transform: scale(1.5);
      padding-top: 20px;
    }
  }

  h2 {
    width: 90%;
    text-align: left;
    margin-bottom: 20px;
  }
`;
