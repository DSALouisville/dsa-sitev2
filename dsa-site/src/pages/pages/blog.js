import React from 'react';
import ReactMarkdown from 'react-markdown';
import map from 'lodash/map';
import moment from 'moment';
import PostList from '../modules/PostList';
import Layout from '../modules/Layout';
import fetch from 'isomorphic-unfetch';

class blog extends React.Component {
  static async getInitialProps ({req}) {
    const res = await fetch(`${process.env.serverUrl}/postList`);
    const json = await res.json();
    return { list: json };
  }
  render() {
    return (
      <div>
        <Layout>
          <PostList list={this.props.list} />
        </Layout>
      </div>
    );
  }
}

export default blog;
