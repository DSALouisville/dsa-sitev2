import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PostList from '../modules/PostList';

const blog = {
  title: 'Test Blog',
  author: 'Cmde. Boris',
  body: 'Words and words',
  tags: ['red', 'trotsky'],
  date: new Date('2017-05-11'),
  excerpt: 'An excerpt, bruh',
};

const list shallow(<PostList list={[blog, blog]} />);

test('There are two cards', () => {
  expect(list.find('span.post-card-title')).to.have.length(2);
});

test('There is a list', () => {
  expect(list.find('ul.post-list').length).to.have.length(2);
});

test('The list has two things', () => {
  expect(list.find('li.post-list-item,')).to.have.length(2);
});
