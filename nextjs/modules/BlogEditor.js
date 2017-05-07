import React from 'react';

class BlogEditor extends React.Component {
  render() {
    const shrink = this.props.shrink ? 'shrink' : '' ;
    return (
      <div className={`container ${shrink}`}>
        <div className="row">
          <div className="six columns">
            <label htmlFor='title'>{'Title'}</label>
            <input
              className="u-full-width input"
              name="title"
              onChange={this.props.updateContent}
              id="title"></input><br/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label htmlFor='author'>{'Author'}</label>
            <input
              className="u-full-width input"
              name="author"
              onChange={this.props.updateContent}
              id="author"></input><br/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label htmlFor='username'>{'username'}</label>
            <input
              className="u-full-width input"
              name="username"
              onChange={this.props.updateContent}
              id="username"></input><br/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label htmlFor='password'>{'password'}</label>
            <input
              className="u-full-width input"
              type="password"
              name="password"
              onChange={this.props.updateContent}
              id="password"></input><br/>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <label htmlFor="body">{'Body'}</label>
            <textarea
              onChange={this.props.updateContent}
              name="body"
              className="u-full-width input content"
              id="content">
            </textarea><br/>
          </div>
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
