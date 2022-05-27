import { Link } from "wouter";
import styled from "styled-components";

const Category = ({ name, options = [] }) => {
  return (
    <Container>
      <h3>{decodeURI(name)}</h3>
      <ul>
        {options.map((option, index) => (
          <CategoryListItem key={option} index={index} type="primary">
            <CategoryLink to={`/search/${option}`}>{option}</CategoryLink>
          </CategoryListItem>
        ))}
      </ul>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  text-align: right;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
  }
  @media (max-width: 880px) {
    text-align: center;
    ul {
      justify-content: center;
    }
  }
`;

const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  background-color: ${(props) =>
    `var(--brand-color_${(props.index % 5) + 1})`};

  color: ${(props) => {
    const needWhiteArray = [3, 4];
    const needWhite = needWhiteArray.includes((props.index % 5) + 1);
    const colorText = needWhite ? "#fff" : "#18061f";
    return `${colorText}`;
  }};
  transition: background-color ease 0.3s;
  :hover {
    background-color: ${(props) =>
      `var(--hover-color_${(props.index % 5) + 1})`};
  }
`;

const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 17px;
  font-weight: bold;
  transition: color ease-in 0.1s;
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
