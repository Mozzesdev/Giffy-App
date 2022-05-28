import styled from "styled-components";
import { Route } from "wouter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useGif } from "./context/gifContext";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Search/Results";

const App = () => {

  const { autoComplete, setAutoComplete } = useGif();

  return (
    <>
      <GlobalContainer onClick={() => setAutoComplete([])}>
        <NavBar />
        <Route path="/gif/:id" component={Details} />
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Result} />
        <Route path="/404" component={NotFound} />
      </GlobalContainer>
      <Footer />
    </>
  );
};

export default App;

const GlobalContainer = styled.div`
  background-color: #121212;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  @media (max-width: 350px) {
    padding: 50px 0;
  }
  h1 {
    font-size: 40px;
    font-family: "Roboto Mono", monospace;
  }
`;
