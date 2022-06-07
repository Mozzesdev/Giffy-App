import { memo } from "react";
import { Link } from "wouter";
import styled from "styled-components";

const Gif = ({ title, id, url, index, width }) => {
  return (
    <ContainerGif index={index} large={width}>
      <GifLink to={`/gif/${id}`} >
        <h4>{title}</h4>
        <Img src={url} alt={title} index={index} large={width}  />
      </GifLink>
    </ContainerGif>
  );
};

export default memo(Gif, (prev, next) => {
  return prev.id === next.id;
});

const ContainerGif = styled.div`
  width: ${props => props.large ? `${props.large}px` : "100%"};
  height: 100%;
  margin: 0 auto;
  margin-bottom: 0px;
  position: relative;

  :nth-child(8n + 1) {
    grid-column-end: span 2;
    grid-row-end: span 2;
  }

  :nth-child(11n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  :nth-child(10n + 3) {
    grid-column: span 2;
    grid-row: span 1;
  }
  @media (max-width: 45rem) {
    :nth-child(11n + 1),
    :nth-child(8n + 1),
    :nth-child(10n + 3) {
      grid-column: span 1;
      grid-row: span 1;
    }
  }

  h4 {
    background-color: #00000090;
    bottom: 0;
    font-size: 14px;
    color: #fff;
    padding: 3px;
    margin: 0;
    position: absolute;
  }

  :hover:nth-child(5n + ${props => props.index + 1}) h4 {
    background-color: var(--brand-color_${props => `${(props.index % 5) + 1}`});
    color: ${props => (props.index % 5) + 1 === 3 || (props.index % 5) + 1 === 4 ? '#fff' : '#18061f'};
  }

`;

const GifLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;

const Img = styled.img`
  height: inherit;
  object-fit: cover;
  width: 100%;
  min-height: 200px;
  height: 100%;
  transition: all ease 0.2s;

  :nth-child(5n + 2) {
    background-color: ${(props) => props.index ? `var(--brand-color_${(props.index % 5) + 1})` : "var(--brand-color_2)" };
  }
  :hover {
    padding: ${props => props.large ? "0" : "6px"};
  }
`;
