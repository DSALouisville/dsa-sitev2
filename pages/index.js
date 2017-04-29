import React from 'react';
import Head from 'next/head';
import Logo from './Logo';
import MenuBar from './MenuBar';
export default () => (
  <div>
    <Head>
      <title>A title</title>
      <link rel="stylesheet" href="/static/main.css"></link>
    </Head>
    <Logo/>
    <MenuBar/>
  </div>
)
