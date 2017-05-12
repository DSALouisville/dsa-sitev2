import React from 'react';
import Head from 'next/head'
import { Container } from 'reactstrap'
import Base from '../modules/Base';

const Layout = (props) => (
  <div>
    <Head>
      <title>PairHub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/static/main.css" />
    </Head>
    <Container>
      <Base title="Louiville DSA"/>
      {props.children}
    </Container>
  </div>
)

export default Layout
