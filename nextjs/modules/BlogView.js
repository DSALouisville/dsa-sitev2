import React from 'react';
import _ from 'lodash';

class BlogView extends React.Component {
  render() {
    const { title, author, body, tags } = this.props.post;
    const tagLis = [];
    _.each(tags, (tagText, index) => {
      tagLis.push(
        <li className="tag" key={index}>{tagText}</li>
      );
    });
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
            { tagLis }
          </ul>
        </div>
      </div>
    );
  }
}

export default BlogView;
