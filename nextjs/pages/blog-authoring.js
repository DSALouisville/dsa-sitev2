import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import BlogEditor from './BlogEditor';
import Blog from './blog';

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
  updateContent(e) {
    const post = this.state.post;
    post[e.target.name] = e.target.value;
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
            updateAuthor={this.updateAuthor.bind(this)}
            updateTitle={this.updateTitle.bind(this)}
            updateContent={this.updateContent.bind(this)}
            post={this.postToS3.bind(this)}
            shrink={!this.state.edit}
          />
        </div>
        <div className="container preview">
        <Blog
          content={_.omit(this.state, 'config')}
          shrink={this.state.edit}
        />
        </div>
      </div>
    );
  }
}
