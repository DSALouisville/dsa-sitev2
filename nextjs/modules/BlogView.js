import React from 'react';

class BlogView extends React.Component {
  render() {
    const { title, author, body, tags } = this.props.post;
    return (
      <div className="blog-view">
        <div className="blog-title">
          { title }
        </div>
        <div className="blog-author">
          { author }
        </div>
        <div className="blog-body">
          { body }
        </div>
        <div className="blog-tags">
          <ul className="tag-list">
            <li className="tag">A tag</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogView;
