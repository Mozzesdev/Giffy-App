import debounce from "just-debounce-it";
import { useCallback, useEffect, useRef } from "react";
import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import NotResult from "../../components/NotResult";

const Result = ({ params }) => {
  const { keyword, rating } = params;
  const { loading, gifs, setPage, loadingPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((page) => page + 1), 500),
    []
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title>Cargando...</title>
          </Helmet>
          <Spinner minHeight="400px" />
        </>
      ) : (
        <>
          <Helmet>
            <title>
              {decodeURI(keyword).charAt(0).toUpperCase() +
                decodeURI(keyword).slice(1)} Gifs{" "}
              - Giffy
            </title>
          </Helmet>
          <Container>
            <h2>
              {decodeURI(keyword).charAt(0).toUpperCase() +
                decodeURI(keyword).slice(1)}{" "}
              <span className="num-results">{gifs.data?.length} Gifs</span>
            </h2>
            {gifs.data.length === 0 ? (
              <NotResult keyword={keyword} />
            ) : (
              <GifsList gifs={gifs.data} />
            )}
            {loadingPage &&
              gifs.pagination.total_count !== gifs.pagination.count && (
                <Spinner minHeight="100px" />
              )}
          </Container>
        </>
      )}
      <div id="visor" ref={externalRef} />
    </>
  );
};

export default Result;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 0 0.5em;
  text-align: left;
  h2 {
    font-size: 27px;
    margin-bottom: 20px;
    .num-results {
      font-size: 14px;
      font-family: "Roboto Mono", monospace;
      color: #b9b9b9;
    }
  }
`;
