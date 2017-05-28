import React from 'react';
import Head from 'next/head'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../modules/Logo';
import MenuBar from '../modules/MenuBar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Louisville DSA</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="/static/bootstrap..css" />
      <link rel="stylesheet" href="/static/main.css" />
      <link rel="stylesheet" href="/static/rbc.css" />
    </Head>
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
