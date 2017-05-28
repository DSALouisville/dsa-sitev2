import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import Logo from '../modules/Logo';
import MenuBar from '../modules/MenuBar';
import '../main.css';
import 'bootstrap/dist/css/bootstrap.css';

const Layout = (props) => (
  <div>
    <Container>
          <MenuBar/>
          sdg
      <Row>
        <Col xs="3">
          <Logo className="side"/>
        </Col>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
  </div>
)

export default Layout
