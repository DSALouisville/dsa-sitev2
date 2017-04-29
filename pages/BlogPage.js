import React from 'react';
import ReactMarkdown from 'react-markdown';

import post from '../static/blog1';

class BlogPage extends React.Component {
  render() {
    return (
      <div className="BlogPage">
        <ReactMarkdown source={post}/>
      </div>
    );
  }
}

export default BlogPage;
