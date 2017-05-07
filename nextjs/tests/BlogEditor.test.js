import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BlogEditor from '../modules/BlogEditor';

const editor = shallow(
  <BlogEditor/>
);

test('Has an author field', () => {
  expect(editor.contains(<label htmlFor='author'>{'Author'}</label>)).to.equal(true);
  expect(editor.find('input[name="author"]')).to.have.length(1);
});

test('Has a title field', () => {
  expect(editor.contains(<label htmlFor='title'>{'Title'}</label>)).to.equal(true);
  expect(editor.find('input[name="title"]')).to.have.length(1);
});

test('Has a username field', () => {
  expect(editor.contains(<label htmlFor='username'>{'username'}</label>)).to.equal(true);
  expect(editor.find('input[name="username"]')).to.have.length(1);
});

test('Has a body field', () => {
  expect(editor.contains(<label htmlFor='body'>{'Body'}</label>)).to.equal(true);
  expect(editor.find('textarea[name="body"]')).to.have.length(1);
});

test('Has a tags field', () => {
  expect(editor.contains(<label htmlFor='tags'>{'tags'}</label>)).to.equal(true);
  expect(editor.find('input[name="tags"]')).to.have.length(1);
});

test('Has a password field', () => {
  expect(editor.contains(<label htmlFor='password'>{'password'}</label>)).to.equal(true);
  expect(editor.find('input[name="password"]')).to.have.length(1);
  expect(editor.find('input[type="password"]')).to.have.length(1);
});
