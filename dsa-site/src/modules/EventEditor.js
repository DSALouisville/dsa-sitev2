import React from 'react';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DateTimePicker } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

momentLocalizer(moment);

class EventEditor extends React.Component {
  render() {
    return (
      <div>
        <h1>New Event</h1>
        <Form>
          <FormGroup>
              <Label htmlFor='title'>{'Event Title'}</Label>
              <Input
                name="title"
                // onChange={this.props.updateContent.bind(null, 'title')}
                id="title"
              />
              <Label htmlFor="startDate">{'Starts'}</Label>
              <DateTimePicker name="startDate" defaultValue={new Date()} />
              <Label htmlFor="endDate">{'Ends'}</Label>
              <DateTimePicker name="endDate" defaultValue={new Date()} />
              <Label htmlFor="description">{'Description'}</Label>
              <Input
                type='textarea'
                rows="10"
                // onChange={this.props.updateContent.bind(null, 'body')}
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
                // onChange={this.props.updateContent.bind(null, 'username')}
                id="username"
              />
            </div>
            <div className="short-field">
              <Label htmlFor='password'>{'password'}</Label>
              <Input
                type="password"
                name="password"
                // onChange={this.props.updateContent.bind(null, 'password')}
                id="password"
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.props.submit}>POST</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default EventEditor;
