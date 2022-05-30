import React from "react";
import styled from 'styled-components'
import { Link } from "wouter";

const NavCategoriesRes = ({ navSpinn, setNavSpinn }) => {
  return (
    <>
      {navSpinn && (
        <Container onClick={()=> setNavSpinn(!navSpinn)}>
          <Navigation onClick={(e) => e.stopPropagation()}>
            <div>
              <Link to="#">Reactions</Link>
              <Link to="#">Sports</Link>
              <Link to="#">Entertainment</Link>
              <Link to="#">Artist</Link>
            </div>
          </Navigation>
        </Container>
      )}
    </>
  );
};

export default NavCategoriesRes;

const Container = styled.div`
 width: 100%;
 position: fixed;
 top: 0;
 height: 100vh;
 background: #00000042;
 z-index: 3;
 display: flex;
 justify-content: flex-end; 
`

const Navigation = styled.div`
 width: 60%;
 background-color: #fff;
 height: 100vh;
`