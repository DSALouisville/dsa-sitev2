import React from 'react';
import moment from 'moment';

class PostCard extends React.Component {
  render() {
    const post = this.props.post
    post.date = moment(this.props.date).format('D MMM, YYYY');
    return(
      <div className="post-card">
        <span className="post-card-title">{post.title}</span>
        <span className="post-card-author">{post.author}</span>
        <span className="post-card-date">{post.date}</span>
        <span className="post-card-excerpt">{post.excerpt}</span>
      </div>
    );
  }
}

export default PostCard;
