import styled from "styled-components";
import Gif from "./Gif";

const GifsList = ({ gifs = [], width = '90%' }) => {
  return (
    <>
      <GifsContainer width={width}>
        {gifs.map(({ id, url, title }) => (
          <Gif id={id} key={id} url={url} title={title} />
        ))}
      </GifsContainer>
    </>
  );
};

export default GifsList;

const GifsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 10px;
  margin: 10px auto;
  width: ${(props) => props.width};
  min-height: 100vh;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
