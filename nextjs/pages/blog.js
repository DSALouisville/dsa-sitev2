import React from 'react';
import ReactMarkdown from 'react-markdown';
import Base from '../modules/Base';
import AWS from 'aws-sdk';
import map from 'lodash/map';
import moment from 'moment';
import PostList from '../modules/PostList';
import Layout from '../modules/Layout';

class blog extends React.Component {
  static async getInitialProps ({req}) {
    const res = await fetch('http://localhost:5000/postList');
    const json = await res.json();
    return { list: json };
  }
  render() {
    return (
      <div>
        <Layout />
        <PostList list={this.props.list} />
      </div>
    );
  }
}

export default blog;
