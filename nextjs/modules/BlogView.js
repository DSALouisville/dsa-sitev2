import React from 'react';

class BlogView extends React.Component {
  render() {
    return (
      <div className="blog-view">
        <div className="blog-title">
          Title
        </div>
        <div className="blog-author">
          Author
        </div>
        <div className="blog-body">
          Body
        </div>
        <div className="blog-tags">
          <ul className="tag-list">
            <li>A tag</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogView;
