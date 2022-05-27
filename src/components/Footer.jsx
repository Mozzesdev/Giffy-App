import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <h4>
        Powered by <a href="https://giphy.com/">GIPHY...</a>
      </h4>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: 30px 20px;
  background-color: #000000;
  height: 160px;
  display: grid;
  place-items: center;
  h4 {
    text-align: center;
    color: #f1f1f1;
    a {
      transition: all ease 0.3s;
      :hover {
        color: ${() => {
          const colors = [
            "#00ff99",
            "#00ccff",
            "#9933ff",
            "#ff6347",
            "#fff35c",
          ];
          const rand = Math.floor(Math.random() * colors.length);
          return `${colors[rand]}`;
        }};
        font-size: 20px;
      }
    }
  }
`;
