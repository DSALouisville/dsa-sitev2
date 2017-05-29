import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { Row, Container, Col } from 'reactstrap';
import Layout from '../modules/Layout';
import Calendar from '../modules/Calendar';
import Blog from '../modules/Blog';
import BlogAuthoring from '../modules/BlogAuthoring';
import BlogView from '../modules/BlogView';
import post from './examplePost';
import postList from './exampleList';
import events from './events';
import PostCard from '../modules/PostCard';
import PostList from '../modules/PostList';
import EventEditor from '../modules/EventEditor';
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

storiesOf('Layout', module)
  .add('App layout component', () => (
    <Layout />
  ))
  .add('App layout component with calendar', () => (
    <Layout children={[<Calendar events={events}/>]}/>
  ))
  .add('App layout component with post list', () => (
    <Layout children={[<Blog list={postList}/>]}/>
  ))
  .add('App layout component with post editor', () => (
    <Layout children={[<BlogAuthoring />]}/>
  ))
  .add('App layout component with event editor', () => (
    <Layout children={[<EventEditor />]}/>
  ))
  .add('App layout component with post view', () => (
    <Layout children={[<BlogView post={ post }/>]} />
  ));

storiesOf('PostCard', module)
  .add('Blog post card', () => (
    <Container>
      <Row>
        <Col xs="8" mr-auto>
          <PostCard post={post} />
        </Col>
      </Row>
    </Container>
  ));

storiesOf('PostList', module)
  .add('List of blog posts', () => (
    <Container>
      <Row>
        <Col xs="8" mr-auto>
          <PostList list={postList} />
        </Col>
      </Row>
    </Container>
  ))

storiesOf('Calendar', module)
  .add('Caledar component', () => (
    <Container>
      <Row>
        <Col xs="8" mr-auto>
          <Calendar events={events} />
        </Col>
      </Row>
    </Container>
  ))

storiesOf('Event editor', module)
  .add('Event editor component', () => (
    <Container>
      <Row>
        <Col xs="8" mr-auto>
          <EventEditor />
        </Col>
      </Row>
    </Container>
  ))
