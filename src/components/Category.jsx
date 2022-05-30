import { Link } from "wouter";
import styled from "styled-components";

const Category = ({ name, options = [] }) => {
  return (
    <Container>
      <h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="5.615%"
              y1="77.472%"
              x2="100%"
              y2="26.124%"
              id="trending"
            >
              <stop stopColor="#3191FF" offset="0%"></stop>
              <stop stopColor="#0CF" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            d="M25.333 4.635l-6.45-.032a.47.47 0 00-.471.468l.004 1.575.008.085a.47.47 0 00.462.383h2.94l-7.544 8.101-3.878-3.125a1.119 1.119 0 00-1.631-.009l-7.584 7.73a1 1 0 00-.002 1.4l.288.295a1 1 0 001.431 0L9.652 14.6l3.782 3.042.093.1c.442.442.964.541 1.498.145l8.43-8.998v3.103c0 .25.197.456.446.468l1.407.069a.47.47 0 00.491-.446V5.104a.47.47 0 00-.466-.469z"
            fill="url(#trending)"
            fillRule="nonzero"
            transform="rotate(-5 -21.505 23.157)"
          ></path>
        </svg>
        {decodeURI(name)}
      </h3>
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
  h3 {
    text-align: right;
    font-size: 27px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    svg {
      margin-top: 5px;
      transform: scale(1.6);
      margin-right: 15px;
    }
  }
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
  background-color: ${(props) => `var(--brand-color_${(props.index % 5) + 1})`};

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
  font-size: 16px;
  font-weight: 600;
  transition: color ease-in 0.1s;
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
