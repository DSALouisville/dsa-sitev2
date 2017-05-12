import React from 'react';
import _ from 'lodash';
import Markdown from 'react-markdown';

class BlogView extends React.Component {
  render() {
    const post = this.props.post;
    post.body = post.body ? post.body : '';
    const { title, author, body, tags } = post;
    const tagLis = [];
    _.each(tags, (tagText, index) => {
      tagLis.push(
        <li className="tag" key={index}>{tagText}</li>
      );
    });
    return (
      <div className={'blog-view'}>
        <div className="blog-title">
          { title }
        </div>
        <div className="blog-author">
          { author }
        </div>
        <div className="blog-body">
          <Markdown source={ body }/>
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
