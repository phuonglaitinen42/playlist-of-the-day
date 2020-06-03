import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "../src/Components/Header/Header";
import WelcomePage from "../src/Webpages/WelcomePage";
import QuizPage from "../src/Webpages/QuizPage";
import Footer from "../src/Components/Footer/Footer";
import Result from "../src/Components/Result/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Playlist from "./Components/Playlist/Playlist";

const App = () => {
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Switch>
          <Route exact path="/">
            <Header />
            <WelcomePage />
            <Footer />
          </Route>
          <Route path="/quiz" component={QuizPage} />
          <Route path="/result" component={Result} />
          <Route path="/playlist" component={Playlist} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
