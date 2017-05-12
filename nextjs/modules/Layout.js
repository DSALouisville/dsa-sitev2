import React from 'react';
import Head from 'next/head'
import { Container, Row } from 'reactstrap'
import Base from '../modules/Base';
import Logo from '../modules/Logo';
import MenuBar from '../modules/MenuBar';

const Layout = (props) => (
  <div>
    <Head>
      <title>PairHub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
    <Container>
      <Logo className="side"/>
      <MenuBar/>
      <Row>
        {props.children}
      </Row>
    </Container>
  </div>
)

export default Layout
