import React, { Component } from 'react';
import _ from 'lodash';
import BlogEditor from '../modules/BlogEditor';
import BlogView from '../modules/BlogView';
import Layout from '../modules/Layout';

const fields = [
  'title',
  'author',
  'body',
  'username',
  'password'
];

export default class BlogAuthoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      post: {
        auth: {},
      },
    }
  }

  postBlog() {
  }
  updateContent(name, e) {
    const post = this.state.post;
    post[name] = e.target.value;
    this.setState({ post });
    console.log(this.state);
  }
  edit(e) {
    e.preventDefault();
    this.setState({ edit: true });
  }
  preview(e) {
    e.preventDefault();
    this.setState({ edit: false });
  }
  render() {
    return (
      <div>
        <Layout/>
        <div className="container">
          <BlogEditor
            updateContent={this.updateContent.bind(this)}
          />
        </div>
        <div className="container preview">
          <BlogView
            post={this.state.post}
          />
        </div>
      </div>
    );
  }
}
