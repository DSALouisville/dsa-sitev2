import React from 'react';
import _ from 'lodash';
import PostCard from './PostCard';

class PostList extends React.Component {
  render() {
    const list = _.map(this.props.list, (post, index) => {
      return (
        <li className="post-list-item" key={index}>
          <PostCard post={post} />
        </li>
      )
    });
    return (
      <ul className="post-list">
        {list}
      </ul>
    );
  }
}

export default PostList;
