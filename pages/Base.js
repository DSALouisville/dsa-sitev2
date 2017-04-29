import React from 'react';
import Head from 'next/head';
import Logo from './Logo';
import Link from 'next/link';
import MenuBar from './MenuBar';

class Base extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <link rel="stylesheet" href="/static/main.css"></link>
        </Head>
        <Logo className="side"/>
        <MenuBar/>
      </div>
    )
  }
}
    //<BlogPost content={post}/>
//
export default Base;
