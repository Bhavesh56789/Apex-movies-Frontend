import React, { Component } from 'react';
import Landing from '../../components/Landing/Landing'
import Container from 'react-bootstrap/Container';
import BootstrapNavbar from '../mainpage-navbar/Navbar'
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <Container>
        <BootstrapNavbar />
        {/* <div id="room"></div>
        <div id="adam"></div> */}
        <Landing />
      </Container>
    );
  }
}

export default Intro;
