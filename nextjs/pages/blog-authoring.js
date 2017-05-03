import React from 'react';
import Base from '../modules/Base';
import blog from './blog';
import ReactMarkdown from 'react-markdown';
import AWS from 'aws-sdk';

class BlogAuthoring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      config: {
        accessKeyId: process.env.accessKey,
        secretAccessKey: process.env.secretKey,
        region: 'us-east-1',
      },
    }
  }

  postToS3(){
    const { accessKeyId, secretAccessKey, region } = this.state.config;
    console.log(this.state.config);
    const s3 = new AWS.S3({ accessKeyId, secretAccessKey, region });
    s3.getBucketCors({
      Bucket: 'dsa-blog',
      //Body: JSON.stringify(this.state.content),
      //Key: `${Date.now()}-${this.state.content.title}`,
    }, (err, res) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(res);
      }
    });
  }

  updatePreview(e) {
    this.setState({
      content: e.target.value,
    })
  }
  updateTitle(e) {
    this.setState({
      title: e.target.value,
    })
  }
  updateAuthor(e) {
    this.setState({
      author: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <Base title="Louiville DSA"/>
        {"title"}
        <input className="post-input"
          onChange={this.updateTitle.bind(this)}></input>
        {"author"}
        <input onChange={this.updateAuthor.bind(this)}></input>
        {"text"}
        <textarea
          onChange={this.updatePreview.bind(this)}
          className="">
        </textarea>
        <button onClick={this.postToS3.bind(this)}>POST</button>

        <div className="post-preview">
          <blog source={this.state.content}/>
        </div>
      </div>

    )
  }
}
    //<BlogPost content={post}/>
//
export default BlogAuthoring;;
