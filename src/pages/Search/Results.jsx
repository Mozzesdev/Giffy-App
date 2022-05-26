import debounce from "just-debounce-it";
import { useCallback, useEffect, useRef } from "react";
import GifsList from "../../components/GifsList";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";

const Result = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
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
        <Spinner />
        </>
      ) : (
        <>
        <Helmet>
          <title>{decodeURI(keyword)} - {`${gifs.length}`} resultados de busqueda - Giffy</title>
        </Helmet>
          <div
            style={{
              width: "100%",
              maxWidth: "90rem",
              margin: "0 auto",
              padding: "0 0.5em",
            }}
          >
            <h2>{decodeURI(keyword)}</h2>
            <GifsList gifs={gifs} />
          </div>
        </>
      )}
      <div id="visor" ref={externalRef} />
    </>
  );
};

export default Result;
