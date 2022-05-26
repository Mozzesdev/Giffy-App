import styled from "styled-components";
import { Link, Route } from "wouter";
import Footer from "./components/Footer";
import SearchForm from "./components/SearchForm";
import { GifProvider } from "./context/gifContext";
import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Result from "./pages/Search/Results";

const App = () => {
  return (
    <GifProvider>
      <GlobalContainer>
        <h1>
          <Link to="/">Giffy</Link>
        </h1>
        <SearchForm />
        <Route path="/gif/:id" component={Details} />
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={Result} />
        <Route path="/404" component={NotFound} />
      </GlobalContainer>
      <Footer />
    </GifProvider>
  );
};

export default App;

const GlobalContainer = styled.div`
  background-color: #15091b;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  padding: 70px 0;
  @media (max-width: 350px) {
    padding: 50px 0;
  }
`;
