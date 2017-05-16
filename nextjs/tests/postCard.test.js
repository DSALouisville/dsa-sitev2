import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PostCard from '../modules/PostCard';

const blog = {
  title: 'Test Blog',
  author: 'Cmde. Boris',
  body: 'Words and words',
  tags: ['red', 'trotsky'],
  date: '2017-05-11',
  excerpt: 'An excerpt, bruh',
};

const card = shallow(<PostCard post={blog} />);

test('Displays post title', () => {
  const spn = card.find('span.post-card-title');
  expect(spn).to.have.length(1);
  expect(spn.text())
  expect(spn.text()).to.equal('Test Blog');
});
test('Displays post author', () => {
  const spn = card.find('span.post-card-author');
  expect(spn).to.have.length(1);
  expect(spn.text())
  expect(spn.text()).to.equal('Cmde. Boris');
});
test('Displays post date', () => {
  const spn = card.find('span.post-card-date');
  expect(spn).to.have.length(1);
  expect(spn.text())
  expect(spn.text()).to.equal('11 May, 2017');
});
test('Displays post excerpt', () => {
  const spn = card.find('span.post-card-excerpt');
  expect(spn).to.have.length(1);
  expect(spn.text())
  expect(spn.text()).to.equal('An excerpt, bruh');
});
