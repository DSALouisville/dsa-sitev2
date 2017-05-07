import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BlogView from '../modules/BlogView';

const blog = {
  title: 'Test Blog',
  author: 'Cmde. Boris',
  body: 'Words and words',
  tags: ['red', 'trotsky']
};

const view = shallow(
  <BlogView post={ blog }/>
);

const wrap = view.find('div.blog-view');
const tagList = wrap.find('div.blog-tags');

test('Has container element', () => {
  expect(view.find('div.blog-view')).to.have.length(1);
});

test('Displays the title', () => {
  expect(wrap.find('div.blog-title')).to.have.length(1);
  const title = shallow(wrap.find('div.blog-title').nodes[ 0 ]);
  expect(title.render().text()).to.equal('Test Blog');
});

test('Displays the author', () => {
  expect(wrap.find('div.blog-author')).to.have.length(1);
  const author = shallow(wrap.find('div.blog-author').nodes[ 0 ]);
  expect(author.render().text()).to.equal('Cmde. Boris');
});

test('Displays the body', () => {
  expect(wrap.find('div.blog-body')).to.have.length(1);
  const body = shallow(wrap.find('div.blog-body').nodes[ 0 ]);
  expect(body.render().text()).to.equal('Words and words');
});

test('Displays the tags', () => {
  expect(wrap.find('div.blog-tags ul')).to.have.length(1);
  expect(tagList.find('ul.tag-list')).to.have.length(1);
  const tags = shallow(tagList.find('ul.tag-list').nodes[ 0 ]);
  expect(tags.find('li.tag')).to.have.length(2);
});
