import React from "react";
import styled from "styled-components";
import { ButtonHomePage } from "../pages/NotFound";

const NotResult = ({ keyword }) => {
  return (
    <Container>
      <h2>Not results of {decodeURI(keyword)}...</h2>
      <ButtonHomePage to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>
        Home Page
      </ButtonHomePage>
    </Container>
  );
};

export default NotResult;

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 40px;
  h2 {
    font-size: 20px;
  }
`;
