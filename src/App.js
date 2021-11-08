import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { router } from "./router";
import { GlobalStyeld } from "./style/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyeld />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          Home!
        </Route>

        <Route path={router.detail}>Detail Page</Route>

        <Route path={router.search}>Search Page</Route>

        <Route>Page Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
