import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Logo from '../modules/Logo';
import MenuBar from '../modules/MenuBar';
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
          <Col xs="8" ml-auto className="d-flex flex-column ">
            <MenuBar/>
            <div className="content float-left">
              {props.children}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </div>
)

export default Layout
