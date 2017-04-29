import React from 'react';
import ReactMarkdown from 'react-markdown';
import Base from './Base';
import post from '../static/blog1';

class blog extends React.Component {
  render() {
    console.log(post)
    const content = post;
    console.log(content);
    return (
      <div>
        <Base title="Blog"/>
        <div className="BlogPage">
          <div className="blog-title">
            {content.title}
          </div>
          <div className="blog-author">
            {content.author}
          </div>
          <div className="blog-body">
            <ReactMarkdown source={content.body}/>
          </div>
        </div>
      </div>
    );
  }
}

export default blog;
