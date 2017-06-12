import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from '../modules/Logo';
import MenuBar from '../modules/MenuBar';
import Blog from '../modules/Blog';
import Calendar from '../modules/Calendar';
import About from './About';
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css';

const Layout = (props) => (
  <div>
    <Container className="main">
      <div className="screen">
        <Row className="d-flex justify-content-between">
          <Col xs="3">
            <Logo className="side"/>
          </Col>
          <Router>
          <Col xs="8" ml-auto className="d-flex flex-column ">
            <MenuBar/>
            <div className="content">
            <Route exact path="/" component={Blog}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/calendar" component={Calendar}/>
            </div>
          </Col>
      </Router>

        </Row>

      </div>
    </Container>
  </div>
)

export default Layout
