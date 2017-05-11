import React, { Component } from 'react';
import _ from 'lodash';
import BlogEditor from '../modules/BlogEditor';
import BlogView from '../modules/BlogView';
import Layout from '../modules/Layout';
import request from 'request';

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
      },
    }
  }

  postBlog() {
    const body = _.extend(_.omit(this.state.post, ['username', 'password']), {
      auth: {
        username: this.state.post.username,
        password: this.state.post.password,
      }
    });
    request({
      url: 'http://localhost:5000/newPost',
      method: 'POST',
      body,
      json: true,
    });
  }
  updateContent(name, e) {
    const post = this.state.post;
    post[name] = e.target.value;
    this.setState({ post });
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
            submit={this.postBlog.bind(this)}
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
