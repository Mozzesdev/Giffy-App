import styled from "styled-components";
import Gif from "./Gif";

const GifsList = ({ gifs = [], width = '100%' }) => {
  return (
    <>
      <GifsContainer width={width}>
        {gifs.map(({ id, url, title }, index) => (
          <Gif id={id} key={`${Math.random()}${id}`} url={url} title={title} index={index} />
        ))}
      </GifsContainer>
    </>
  );
};

export default GifsList;

const GifsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-flow: row dense;
  grid-auto-rows: 200px;
  gap: 10px;
  min-height: 100vh;
`;
