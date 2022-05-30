import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import LazyTrending from "../../components/LazyTrending";
import { useGifs } from "../../hooks/useGifs";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Home = () => {
  const { loading, gifs } = useGifs({limit: 10});

  return (
    <>
    <Helmet>
      <title>Giffy - Gifs Searching Page...</title>
    </Helmet>
      <LastSearchHomePage>
        <div>
          <h3>Last Search</h3>
          {loading ? <Spinner /> : <GifsList gifs={gifs.data} width='100%' />}
        </div>
        <LazyTrending />
      </LastSearchHomePage>
    </>
  );
};

export default Home;

const LastSearchHomePage = styled.div`
  text-align: left;
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 3.5fr 1fr;
  gap: 30px;
  h3 {
    font-size: 27px;
    margin-bottom: 20px;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;
