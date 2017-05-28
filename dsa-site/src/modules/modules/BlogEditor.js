import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BlogEditor extends React.Component {
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
