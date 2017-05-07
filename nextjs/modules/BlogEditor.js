import React from 'react';

class BlogEditor extends React.Component {
  render() {
    return (
      <div>
        <div className="short-field">
          <label htmlFor='title'>{'Title'}</label>
          <input
            className="u-full-width input"
            name="title"
            onChange={this.props.updateContent.bind(null, 'title')}
            id="title">
          </input>
        </div>
        <div className="short-field">
          <label htmlFor='author'>{'Author'}</label>
          <input
            className="u-full-width input"
            name="author"
            onChange={this.props.updateContent.bind(null, 'author')}
            id="author">
          </input>
        </div>
        <div className="short-field">
          <label htmlFor='username'>{'username'}</label>
          <input
            className="u-full-width input"
            name="username"
            onChange={this.props.updateContent.bind(null, 'username')}
            id="username">
          </input>
        </div>
        <div className="short-field">
          <label htmlFor='password'>{'password'}</label>
          <input
            className="u-full-width input"
            type="password"
            name="password"
            onChange={this.props.updateContent.bind(null, 'password')}
            id="password">
          </input>
        </div>
        <div className="long-field">
          <label htmlFor="body">{'Body'}</label>
          <textarea
            onChange={this.props.updateContent.bind(null, 'body')}
            name="body"
            className="u-full-width input content"
            id="content">
          </textarea>
        </div>
        <button onClick={this.props.post}>POST</button>
      </div>
    );
  }
}

BlogEditor.propTypes = {
  updateContent: React.PropTypes.func,
  post: React.PropTypes.func,
};


export default BlogEditor;
