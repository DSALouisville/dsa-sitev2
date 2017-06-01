import React from 'react';
import moment from 'moment';
import { Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css';
import '../PostCard.css';

class PostCard extends React.Component {
  render() {
    const post = this.props.post
    post.date = moment.utc(post.date).format('D MMM, YYYY');
    return(
      <Container className="post-card">
        <a href={{ pathname: '/post', query: { postId: post._id }}}>
          <Row className="d-flex flex-row">
            <div className="d-inline-flex flex-column p-2 col-8">
              <span className="post-card-title p-2">
                {post.title}
              </span>
              <span className="post-card-author p-2">
                {post.author}
              </span>
              <span className="post-card-excerpt p-2">
                {post.excerpt}
              </span>
            </div>
            <div className="d-inline-flex flex-column p-2 ml-auto">
              <span className="post-card-date p-2 ml-auto">
                {post.date}
              </span>
              <span className="post-card-thumb p-2 ml-auto">
                <img src={post.thumbUrl} />
              </span>
            </div>
          </Row>
        </a>
      </Container>
    );
  }
}

export default PostCard;
