import Helmet from "react-helmet";
import styled from "styled-components";
import { Link } from "wouter";
import Spinner from "../components/Spinner";
import useRandomGif from "../hooks/useRandomGif";

const NotFound = () => {
  const { randomGif, loading, error } = useRandomGif({ tag: "404" });

  return (
    <>
      <Helmet>
        <title>404 - Page not found</title>
      </Helmet>
      <Container>
        <h2 className="title-404">
          <i>404</i>
        </h2>
        <ContainerImg>
          <h4>Oops! Something unexpected happened, but it's not so bad...</h4>
          {loading ? (
            <Spinner />
          ) : (
            <img src={randomGif.url} alt={randomGif.title} />
          )}
        </ContainerImg>
        <ButtonHomePage to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
          </svg>
          Home Page
        </ButtonHomePage>
      </Container>
    </>
  );
};

export default NotFound;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 120px;
  .title-404 {
    font-size: 90px;
    font-family: "Roboto Mono", monospace;
    font-weight: bold;
    line-height: 73px;
  }
`;

const ContainerImg = styled.div`
  width: 500px;
  height: 310px;
  margin: 30px auto;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 20px;
  }
`;

export const ButtonHomePage = styled(Link)`
  background-color: #8827f1;
  width: 142px;
  padding: 0 5px 0 0;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 14.5px;
  line-height: 1;
  transition: all ease 0.3s;
  :hover {
    background-color: #7100eb;
  }
  svg {
    fill: #ffffff;
  }
`;
