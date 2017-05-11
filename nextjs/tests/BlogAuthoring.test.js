import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import BlogAuthoring from '../pages/blog-authoring';
import _ from 'lodash';

const blog = {
  title: 'Test Blog',
  author: 'Cmde. Boris',
  body: 'Words and words',
  tags: ['red', 'trotsky']
};

const blogAuth = mount(<BlogAuthoring/>);

test('Has an author field', () => {
  const author = blogAuth.find('input[name="author"]');
  const label = blogAuth.find({htmlFor: 'author'});
  expect(author).to.have.length(1);
  expect(label).to.have.length(1);

});

test('Has a title field', () => {
  expect(blogAuth.find({htmlFor: 'title'})).to.have.length(1);
  expect(blogAuth.find('input[name="title"]')).to.have.length(1);
});

test('Has a username field', () => {
  expect(blogAuth.find({htmlFor: 'username'})).to.have.length(1);
  expect(blogAuth.find('input[name="username"]')).to.have.length(1);
});

test('Has a body field', () => {
  expect(blogAuth.find({htmlFor: 'body'})).to.have.length(1);
  expect(blogAuth.find('textarea[name="body"]')).to.have.length(1);
});

test('Has a password field', () => {
  expect(blogAuth.find({htmlFor: 'password'})).to.have.length(1);
  expect(blogAuth.find('input[name="password"]')).to.have.length(1);
  expect(blogAuth.find('input[type="password"]')).to.have.length(1);
});

test('Title field updates parent state', () => {
  const input = blogAuth.find('input[name="title"]');
  input.simulate('change', { target: { value: 'a title' } })
  expect(blogAuth.state().post.title).to.equal('a title');
});

test('Author field updates parent state', () => {
  const input = blogAuth.find('input[name="author"]');
  input.simulate('change', { target: { value: 'an author' } })
  expect(blogAuth.state().post.author).to.equal('an author');
});

test('Username field updates parent state', () => {
  const input = blogAuth.find('input[name="username"]');
  input.simulate('change', { target: { value: 'a username' } })
  expect(blogAuth.state().post.username).to.equal('a username');
});

test('Password field updates parent state', () => {
  const input = blogAuth.find('input[name="password"]');
  input.simulate('change', { target: { value: 'a password' } })
  expect(blogAuth.state().post.password).to.equal('a password');
});

test('Body field updates parent state', () => {
  const input = blogAuth.find('textarea[name="body"]');
  input.simulate('change', { target: { value: 'a body' } })
  expect(blogAuth.state().post.body).to.equal('a body');
});

blogAuth.setState(blog);

const wrap = blogAuth.find('div.blog-view');
const tagList = wrap.find('div.blog-tags');

test('Has container element', () => {
  expect(blogAuth.find('div.blog-view')).to.have.length(1);
});

test('Displays the title', () => {
  expect(wrap.find('div.blog-title')).to.have.length(1);
  //const title = shallow(wrap.find('div.blog-title').nodes[ 0 ]);
  //expect(title.render().text()).to.equal('Test Blog');
});

test('Displays the author', () => {
  expect(wrap.find('div.blog-author')).to.have.length(1);
//  const author = shallow(wrap.find('div.blog-author').nodes[ 0 ]);
//  expect(author.render().text()).to.equal('Cmde. Boris');
});

test('Displays the body', () => {
  expect(wrap.find('div.blog-body')).to.have.length(1);
 // const body = shallow(wrap.find('div.blog-body').nodes[ 0 ]);
 // expect(body.render().text()).to.equal('Words and words');
});

test('Displays the tags', () => {
  expect(wrap.find('div.blog-tags ul')).to.have.length(1);
  expect(tagList.find('ul.tag-list')).to.have.length(1);
  const tags = shallow(tagList.find('ul.tag-list').nodes[ 0 ]);
  expect(tags.find('li.tag')).to.have.length(2);
  const firstTag = shallow(tags.find('li.tag').nodes[ 0 ]);
  const secondTag = shallow(tags.find('li.tag').nodes[ 1 ]);
  expect(firstTag.text()).to.equal('red');
  expect(secondTag.text()).to.equal('trotsky');
});
