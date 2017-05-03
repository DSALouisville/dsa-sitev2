import React from 'react';
import ReactMarkdown from 'react-markdown';
import Base from '../modules/Base';
import AWS from 'aws-sdk';
import map from 'lodash/map';
import moment from 'moment';

class BlogIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {title, author, date, key} = this.props.metadata;
    render (
      <li>
        <span>{title}</span>,
        <span>{author}</span>,
        <span>{date.format('YYYY-MM-DD')}</span>,
      </li>
    );
  }
}
class blog extends React.Component {
  constructor(props) {
    super(props);
    const options = {
      accessKeyId: process.env.accessKey,
      secretAccessKey: process.env.secretKey,
      region: 'us-east-1',
    }
    const s3 = new AWS.S3(options);
    this.state = {
      s3,
    };
  }
  componentDidMount() {
    const s3 = this.state.s3;
    s3.listObjects({ Bucket: 'dsa-blog' }, (err, data) => {
      const posts = map(data.Contents, (item) => {
        const arr = item.Key.split('_');
        return {
          date: moment(arr[0]),
          title: arr[1],
          author: arr[2],
          key: arr[3],
        };
      })
      this.setState({
        posts,
      });
    })
  }
  render() {
    console.log(this.state.posts);
    const items = map(this.state.posts, (item) => {
       return (<BlogIndexItem metadata={ item }/>);
    });
    console.log(items);
    return (
      <div>
        <Base title="Blog"/>
        <ul className="blog-index">
          {items}
        </ul>
        </div>
    );
  }
}

export default blog;
