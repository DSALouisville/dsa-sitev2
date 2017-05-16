import React from 'react';
import moment from 'moment';
import Link from 'next/link';

class PostCard extends React.Component {
  render() {
    const post = this.props.post
    post.date = moment.utc(post.date).format('D MMM, YYYY');
    return(
      <div className="post-card">
        <Link href={{ pathname: '/post', query: { postId: post._id }}}>
          <span className="post-card-title">
            <a>{post.title}</a>
          </span>
        </Link>
        <span className="post-card-author">{post.author}</span>
        <span className="post-card-date">{post.date}</span>
        <span className="post-card-excerpt">{post.excerpt}</span>
      </div>
    );
  }
}

export default PostCard;
