import React from 'react';
import ReactS3Uploader from 'react-s3-uploader';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import each from 'lodash/each';
import UploadedCard from './UploadedCard';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  makeUploadList() {
    const result = [];
    each(this.props.assets, (asset, key) => {
      asset.key = key;
      result.push((<UploadedCard file={asset} />))
    });
    return result
  }
  render() {
    return (
      <Form>
        <FormGroup>
            <Label htmlFor='title'>{'Title'}</Label>
            <Input
              name="title"
              onChange={this.props.updateContent.bind(null, 'title')}
              id="title"
            />
            <Label htmlFor='author'>{'Author'}</Label>
            <Input
              name="author"
              onChange={this.props.updateContent.bind(null, 'author')}
              id="author"
            />
            <Label htmlFor="body">{'Body'}</Label>
            <Input
              type='textarea'
              rows="10"
              onChange={this.props.updateContent.bind(null, 'body')}
              name="body"
              id="content"
            />
            <FormText>Markdown supported</FormText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="upload">Upload a file</Label>
          <ReactS3Uploader
            name="upload"
            id="upload"
          />
          {this.makeUploadList()}
        </FormGroup>
        <FormGroup>
          <div className="short-field">
            <Label htmlFor='username'>{'username'}</Label>
            <Input
              name="username"
              onChange={this.props.updateContent.bind(null, 'username')}
              id="username"

            />
          </div>
          <div className="short-field">
            <Label htmlFor='password'>{'password'}</Label>
            <Input
              type="password"
              name="password"
              onChange={this.props.updateContent.bind(null, 'password')}
              id="password"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.props.submit}>POST</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default BlogEditor;
