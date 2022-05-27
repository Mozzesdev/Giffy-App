import debounce from "just-debounce-it";
import { useCallback, useEffect, useRef } from "react";
import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Result = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage, loadingPage } = useGifs({ keyword });
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
          <Spinner minHeight="400px"/>
        </>
      ) : (
        <>
          <Helmet>
            <title>
              {decodeURI(keyword)} - {`${gifs.data?.length}`} resultados de busqueda -
              Giffy
            </title>
          </Helmet>
          <Container>
            <h2>
              {decodeURI(keyword).charAt(0).toUpperCase() +
                decodeURI(keyword).slice(1)}
            </h2>
            <GifsList gifs={gifs.data} />
            {loadingPage && gifs.pagination.total_count !== gifs.pagination.count && <Spinner minHeight="100px" />}
          </Container>
        </>
      )}
      <div id="visor" ref={externalRef} />
    </>
  );
};

export default Result;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0 0 0.5em;
  text-align: left;
  h2 {
    font-size: 27px;
    margin-bottom: 20px;
  }
`;
