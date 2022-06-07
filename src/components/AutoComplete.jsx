import styled from "styled-components";

const AutoComplete = ({ item, to, setAutoComplete, changeKeyword, rating }) => {

  return (
    <Container>
      {item.map((item) => (
        <Item
          key={item.id}
          onClick={() => {
            to(`/search/${item.name}/${rating}`);
            setAutoComplete([]);
            changeKeyword({ keyword: "" });
          }}
        >
          <p>{item.name}</p>
        </Item>
      ))}
    </Container>
  );
};

export default AutoComplete;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 3px;
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  top: 30px;
  z-index: 1;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.363);
`;

const Item = styled.div`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
  color: #000;
  font-size: 13px;
  cursor: pointer;
  :last-child {
    border-bottom: none;
  }
  transition: ease all 0.3s;
  :hover {
    background-color: #e7e7e7;
  }
  @media (max-width: 233px) {
    font-size: 12px;
  padding: 7px;
  }
`;
