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
      },
    }
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
        <h1>New Post</h1>
        <div>
          <BlogEditor
            updateContent={this.updateContent.bind(this)}
            post={this.state.post}
          />
        </div>
        <hr />
        <h1>Preview</h1>
        <div>
          <BlogView
            post={this.state.post}
          />
        </div>
      </div>
    );
  }
}
