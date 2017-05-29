import React from 'react';
import ReactMarkdown from 'react-markdown';
import map from 'lodash/map';
import moment from 'moment';
import PostList from '../modules/PostList';
import Layout from '../modules/Layout';

class Blog extends React.Component {
  static async getInitialProps ({req}) {
    // const res = await fetch(`${process.env.serverUrl}/postList`);
    const json = await res.json();
    return { list: json };
  }
  render() {
    return (
      <div>
        <h1>Recent Posts</h1>
        <PostList list={this.props.list} />
      </div>
    );
  }
}

export default Blog;
