import React from 'react';
import Base from '../modules/Base';
import ReactMarkdown from 'react-markdown';

class BlogAuthoring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  postToS3(){
  }

  updatePreview(e) {
    this.setState({
      content: e.target.value,
    })
    console.log(this.state.content);
  }
  render() {
    return (
      <div>
        <Base title="Louiville DSA"/>
        <textarea
          onChange={this.updatePreview.bind(this)}
          className="post-input">
        </textarea>

        <div className="post-preview">
          <ReactMarkdown source={this.state.content}/>
        </div>
      </div>

    )
  }
}
    //<BlogPost content={post}/>
//
export default BlogAuthoring;;
