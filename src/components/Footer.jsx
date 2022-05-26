import styled from "styled-components"

const Footer = () => {
  return (
    <Container>
      <h2>Giffy</h2>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
 padding: 30px 20px;
 background-color: #0c0c0c;
 height: 160px;
 display: grid;
 place-items: center;
 h2{
  text-align: center;
  color: #f1f1f1;
 }
`