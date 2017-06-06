import React from 'react';
import _ from 'lodash';
import Markdown from 'react-markdown';
import BlogBlockImage from './BlogBlockImage';

class BlogBody extends React.Component {
  makeChunks() {
    const post = this.props.post;
    const { body, assets } = post;
    if (body.match(/-{[^]*}-/)) {
      const breaks = body.match(/-{[^}]*}-/g).map(br => br.slice(2, -2));
      console.log('breaks: ', breaks);
      const chunks = body.split(/-{[^}]*}-/)
      let string = chunks[0];
      const result = [];
      _.each(breaks, (val, ind) => {
        const asset = assets[val];
        if (asset.inline) {
          string += `![${asset.alt}](${asset.url})`;
          string += chunks[ind + 1];
        } else {
          result.push((<Markdown source={string} />));
          result.push((<BlogBlockImage source={asset} />));
          string = chunks[ind + 1];
        }
      });
      result.push((<Markdown source={string} />));
      return result;
    }
    return (<Markdown source={body} />)
  }
  render() {
    console.log(this.makeChunks());
    return (
      <div className="blog-body">
        {this.makeChunks()}
      </div>
    )
  }
}

export default BlogBody;
