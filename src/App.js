import React from 'react';
import './App.css';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container className="p-0" fluid={true}>
      <Header />
      <div> Hello world</div>
      <Footer />
    </Container>
  );
}

export default App;
