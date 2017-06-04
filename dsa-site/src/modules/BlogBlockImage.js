import React from 'react';

class BlogBlockImage extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.source.url} /><br/>
        <span className="blog-caption">
          {this.props.source.alt}
        </span>
      </div>
    );
  }
}

export default BlogBlockImage;
