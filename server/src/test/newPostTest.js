import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';

const newPost = {
  title: 'new title',
  author: 'new author',
  body: 'new body',
  excerpt: 'nb',
  tags: ['new', 'post'],
  assets: [{ url: 'example.com', type: 'image', alt: 'text' }];
}

const newPostTest = () => describe('POST /newPost', () => {
  it('returns a JSON string (string)', async () => {
    newPost._id = 'test_';
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/newPost',
      body: newPost,
      json: true,
    });
    const json = JSON.parse(resp);
    expect(typeof resp).to.equal('string');
    expect(json).to.be.a.string;
  });
  it('requires a body', async () => {
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/newPost',
      body: _.omit(newPost, 'body'),
      resolveWithFullResponse: true,
    });
    const json = JSON.parse(resp.body);
    expect(resp.statusCode).to.equal('400');
    expect(resp.body).to.equal('Post must inlcude a body');
  });
});

export default newPostTest;
