import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BlogEditor from '../modules/BlogEditor';

const component = shallow(
  <BlogEditor/>
);

test('Has an author field', () => {
  expect(component.contains(<label htmlFor='author'>{'Author'}</label>)).to.equal(true);
  expect(component.find('input[name="author"]')).to.have.length(1);
});

test('Has a title field', () => {
  expect(component.contains(<label htmlFor='title'>{'Title'}</label>)).to.equal(true);
  expect(component.find('input[name="title"]')).to.have.length(1);
});

test('Has a username field', () => {
  expect(component.contains(<label htmlFor='username'>{'username'}</label>)).to.equal(true);
  expect(component.find('input[name="username"]')).to.have.length(1);
});

test('Has a body field', () => {
  expect(component.contains(<label htmlFor='body'>{'Body'}</label>)).to.equal(true);
  expect(component.find('textarea[name="body"]')).to.have.length(1);
});

test('Has a tags field', () => {
  expect(component.contains(<label htmlFor='tags'>{'tags'}</label>)).to.equal(true);
  expect(component.find('input[name="tags"]')).to.have.length(1);
});

test('Has a password field', () => {
  expect(component.contains(<label htmlFor='password'>{'password'}</label>)).to.equal(true);
  expect(component.find('input[name="password"]')).to.have.length(1);
  expect(component.find('input[type="password"]')).to.have.length(1);
});
