import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import LazyTrending from "../../components/LazyTrending";
import { useGifs } from "../../hooks/useGifs";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Home = () => {
  const { loading, gifs } = useGifs({limit: 5});

  return (
    <>
    <Helmet>
      <title>Giffy - Gifs Searching Page...</title>
    </Helmet>
      <LastSearchHomePage>
        <div>
          <h3>Ultima busqueda</h3>
          {loading ? <Spinner /> : <GifsList gifs={gifs} width='100%' />}
        </div>
        <LazyTrending />
      </LastSearchHomePage>
    </>
  );
};

export default Home;

const LastSearchHomePage = styled.div`
  text-align: left;
  max-width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3.5fr 0.9fr;
  gap: 40px;
  h3 {
    font-size: 21px;
    margin-bottom: 20px;
  }
  @media (max-width: 800px) {
    max-width: 87%;
  }
  @media (max-width: 700px) {
    max-width: 90%;
    grid-template-columns: 1fr;
  }
`;
