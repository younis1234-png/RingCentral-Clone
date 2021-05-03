import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CallPage from "./components/CallPage/CallPage.jsx";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:id">
          <CallPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Router path="*">
          <NoMatch />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
