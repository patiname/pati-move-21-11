import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./components/Detail/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { ScrollTop } from "./components/ScrollTop";
import { Search } from "./components/Search/Search";
import { router } from "./router";
import { GlobalStyeld } from "./style/GlobalStyled";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyeld />
        <Header />
        <ScrollTop />
        <Switch>
          <Route path={router.home} exact>
            <Home />
          </Route>

          <Route path={router.detail}>
            <Detail />
          </Route>

          <Route path={router.search}>
            <Search />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
