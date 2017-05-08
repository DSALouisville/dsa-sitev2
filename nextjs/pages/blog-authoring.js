import React, { Component } from 'react';
import _ from 'lodash';
import BlogEditor from '../modules/BlogEditor';
import BlogView from '../modules/BlogView';

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
        <div className="container">
          <div className="row">
            <div className="u-pull-left">
              <a href="" onClick={this.edit.bind(this)}>Edit</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="u-pull-right">
              <a href="" onClick={this.preview.bind(this)}>Preview</a>
            </div>
          </div>
        </div>
        <div className="container">
          <BlogEditor
            updateContent={this.updateContent.bind(this)}
          />
        </div>
        <div className="container preview">
        <BlogView
          post={_.omit(this.state, 'config')}
        />
        </div>
      </div>
    );
  }
}
