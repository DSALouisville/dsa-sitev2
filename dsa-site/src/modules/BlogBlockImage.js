import React from 'react';
import '../blog.css';

class BlogBlockImage extends React.Component {
  render() {
    return (

      <div className="d-flex justify-content-center">
      <div className="blog-block-image p-2">
        <img src={this.props.source.url} /><br/>
        <div className="blog-caption small text-center font-italic">
          {this.props.source.alt}
        </div>
        </div>
      </div>
    );
  }
}

export default BlogBlockImage;
