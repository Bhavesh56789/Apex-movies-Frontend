import React from 'react';
import { Route } from 'react-router-dom';
import BootstrapNavbar from '../mainpage-navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Smoke from '../../components/UI Elements/Smoke'
import './mainpage.css';
import HomePage from '../Homepage/homepage';
import Moviepage from '../moviepage/moviepage';

function Mainpage(props) {
  return (
    <div>
      <div><Smoke /></div>
      <div><Smoke /></div>
      <div><Smoke /></div>


      <BootstrapNavbar userdata={props.userdata} />
      <Container className="mainpage">
        <Route path='/main' exact><HomePage token={props.token} user={props.user} /></Route>
        <Route path='/main/:id'><Moviepage token={props.token} user={props.user} /></Route>
      </Container>
    </div>);
}

export default Mainpage;