import styled from "styled-components";
import { Switch } from "wouter";
import { Route } from "wouter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchFormRes from "./components/SearchFormRes";
import { useGif } from "./context/gifContext";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Search/Results";

const App = () => {
  const { autoComplete, setAutoComplete } = useGif();

  return (
    <>
      <GlobalContainer
        onClick={() => autoComplete.length > 0 && setAutoComplete([])}
      >
        <NavBar />
        <SearchFormRes />

        <Switch>
          <Route path="/gif/:id" component={Details} />
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={Result} />
          <Route path="/:rest" component={NotFound} />
        </Switch>
      </GlobalContainer>
      <Footer />
    </>
  );
};

export default App;

const GlobalContainer = styled.div`
  background-color: #121212;
  overflow: hidden;
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
