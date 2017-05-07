import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BlogView from '../modules/BlogView';

const view = shallow(
  <BlogView/>
);

const wrap = view.find('div.blog-view');
const tagList = wrap.find('div.blog-tags');

test('Has container element', () => {
  expect(view.find('div.blog-view')).to.have.length(1);
});

test('Displays the title', () => {
  expect(wrap.find('div.blog-title')).to.have.length(1);
});

test('Displays the author', () => {
  expect(wrap.find('div.blog-author')).to.have.length(1);
});

test('Displays the body', () => {
  expect(wrap.find('div.blog-body')).to.have.length(1);
});

test('Displays the tags', () => {
  expect(wrap.find('div.blog-tags ul')).to.have.length(1);
  expect(tagList.find('ul.tag-list')).to.have.length(1);
});
