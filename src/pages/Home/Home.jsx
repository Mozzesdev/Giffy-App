import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import LazyTrending from "../../components/LazyTrending";
import { useGifs } from "../../hooks/useGifs";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Home = () => {
  const { loading, gifs, error } = useGifs({ limit: 10 });

  if (error.trueOrFalse === true) {
    return (
      <>
        <Helmet>
          <title>Giffy - Gifs Searching Page...</title>
        </Helmet>
        <LastSearchHomePage>
          <div>
            <h3 className="title-last">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <defs>
                  <linearGradient
                    x1="10.615%"
                    y1="2.472%"
                    x2="90%"
                    y2="90.124%"
                    id="last-search"
                  >
                    <stop stopColor="#f10a89" offset="0%"></stop>
                    <stop stopColor="#8c00ff" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#last-search)"
                  d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                ></path>
                <path
                  fill="url(#last-search)"
                  d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                ></path>
              </svg>
              Last Search{" "}
            </h3>
            <p>{error.errorCode}</p>
          </div>
          <LazyTrending />
        </LastSearchHomePage>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Giffy - Gifs Searching Page...</title>
      </Helmet>
      <LastSearchHomePage>
        <div>
          <h3 className="title-last">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <linearGradient
                  x1="10.615%"
                  y1="2.472%"
                  x2="90%"
                  y2="90.124%"
                  id="last-search"
                >
                  <stop stopColor="#f10a89" offset="0%"></stop>
                  <stop stopColor="#8c00ff" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#last-search)"
                d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
              ></path>
              <path
                fill="url(#last-search)"
                d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
              ></path>
            </svg>
            Last Search{" "}
          </h3>
          {loading ? <Spinner /> : <GifsList gifs={gifs.data} width="100%" />}
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
  .title-last {
    font-size: 27px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    svg {
      transform: scale(1.35);
      margin-right: 15px;
    }
    @media (max-width: 350px) {
      font-size: 22px;
      svg {
        transform: scale(1.1);
        margin-right: 7px;
      }
    }
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;
