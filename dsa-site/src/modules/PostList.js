import React from 'react';
import _ from 'lodash';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PostCard from './PostCard';
import '../PostList.css';

class PostList extends React.Component {
  getInitialState
  render() {
    const list = _.map(this.props.list, (post, index) => {
      return (
        <ListGroupItem className="post-list-item">
          <PostCard post={post} />
        </ListGroupItem>
      )
    });
    return (
      <ListGroup className="post-list">
        {list}
      </ListGroup>
    );
  }
}

export default PostList;
