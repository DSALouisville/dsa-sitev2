import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class BlogEditor extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <div className="short-field">
            <Label htmlFor='title'>{'Title'}</Label>
            <Input
              className="u-full-width input"
              name="title"
              onChange={this.props.updateContent.bind(null, 'title')}
              id="title"
            />
          </div>
          <div className="short-field">
            <Label htmlFor='author'>{'Author'}</Label>
            <Input
              className="u-full-width input"
              name="author"
              onChange={this.props.updateContent.bind(null, 'author')}
              id="author"
            />
          </div>
          <div className="long-field">
            <Label htmlFor="body">{'Body'}</Label>
            <Input
              type='textarea'
              onChange={this.props.updateContent.bind(null, 'body')}
              name="body"
              className="u-full-width input content"
              id="content"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="short-field">
            <Label htmlFor='username'>{'username'}</Label>
            <Input
              className="u-full-width input"
              name="username"
              onChange={this.props.updateContent.bind(null, 'username')}
              id="username"
            />
          </div>
          <div className="short-field">
            <Label htmlFor='password'>{'password'}</Label>
            <Input
              className="u-full-width input"
              type="password"
              name="password"
              onChange={this.props.updateContent.bind(null, 'password')}
              id="password"
            />
          </div>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.props.post}>POST</Button>
        </FormGroup>
      </Form>
    );
  }
}

BlogEditor.propTypes = {
  updateContent: React.PropTypes.func,
  post: React.PropTypes.func,
};


export default BlogEditor;
