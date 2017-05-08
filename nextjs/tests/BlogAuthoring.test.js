import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import BlogAuthoring from '../pages/blog-authoring';

const blogAuth = mount(<BlogAuthoring/>);

test('Has an author field', () => {
  expect(blogAuth.contains(<label htmlFor='author'>{'Author'}</label>)).to.equal(true);
  expect(blogAuth.find('input[name="author"]')).to.have.length(1);
});

test('Has a title field', () => {
  expect(blogAuth.contains(<label htmlFor='title'>{'Title'}</label>)).to.equal(true);
  expect(blogAuth.find('input[name="title"]')).to.have.length(1);
});

test('Has a username field', () => {
  expect(blogAuth.contains(<label htmlFor='username'>{'username'}</label>)).to.equal(true);
  expect(blogAuth.find('input[name="username"]')).to.have.length(1);
});

test('Has a body field', () => {
  expect(blogAuth.contains(<label htmlFor='body'>{'Body'}</label>)).to.equal(true);
  expect(blogAuth.find('textarea[name="body"]')).to.have.length(1);
});

test('Has a tags field', () => {
  expect(blogAuth.contains(<label htmlFor='tags'>{'tags'}</label>)).to.equal(true);
  expect(blogAuth.find('input[name="tags"]')).to.have.length(1);
});

test('Has a password field', () => {
  expect(blogAuth.contains(<label htmlFor='password'>{'password'}</label>)).to.equal(true);
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
  expect(blogAuth.state().post.auth.username).to.equal('a username');
});

test('Password field updates parent state', () => {
  const input = blogAuth.find('input[name="password"]');
  input.simulate('change', { target: { value: 'a password' } })
  expect(blogAuth.state().post.auth.password).to.equal('a password');
});

test('Body field updates parent state', () => {
  const input = blogAuth.find('textarea[name="body"]');
  input.simulate('change', { target: { value: 'a body' } })
  expect(blogAuth.state().post.body).to.equal('a body');
});
