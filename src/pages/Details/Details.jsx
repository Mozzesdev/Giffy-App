import { Redirect } from "wouter";
import Gif from "../../components/Gif";
import Spinner from "../../components/Spinner";
import useSingleGif from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";

const Details = ({ params }) => {
  const { id } = params;

  const { gif, loading, error } = useSingleGif(id);

  const title = gif ? gif.title : "";

  if (loading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
          <Spinner />
        </Helmet>
      </>
    );

  if (error) return <Redirect to="/404" />;

  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} - Giffy</title>
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif {...gif} />
    </>
  );
};

export default Details;
