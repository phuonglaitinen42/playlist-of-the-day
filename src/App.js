import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.css";

import Header from '../src/Components/Header/Header';
import WelcomePage from "../src/Webpages/WelcomePage";
import QuizPage from "../src/Webpages/QuizPage";
import ResultPage from "../src/Webpages/ResultPage";
import Footer from '../src/Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



const App = () => {
    return (
      <Router>
      <Container className="p-0" fluid={true}>
      <Header />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      <Footer />
    </Container>
    </Router>
    );
  }


export default App;
