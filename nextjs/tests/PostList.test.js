import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import PostList from '../modules/PostList';
import PostCard from '../modules/PostCard';

const blog = {
  title: 'Test Blog',
  author: 'Cmde. Boris',
  body: 'Words and words',
  tags: ['red', 'trotsky'],
  date: new Date('2017-05-11'),
  excerpt: 'An excerpt, bruh',
};

const list = mount(<PostList list={[blog, blog]} />);

test('There are two cards', () => {
  expect(list.find('span')).to.have.length(8);
});

test('There is a list', () => {
  expect(list.find('ul.post-list')).to.have.length(1);
});

test('The list has two things', () => {
  expect(list.find('li')).to.have.length(2);
});
