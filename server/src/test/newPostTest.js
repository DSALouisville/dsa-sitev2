import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';
import { countPosts } from './helpers';

const newPost = {
  title: 'new title',
  author: 'new author',
  body: 'new body',
  excerpt: 'nb',
  tags: ['new', 'post'],
  assets: [{ url: 'example.com', type: 'image', alt: 'text' }],
  auth: {
    username: 'test',
    password: 'password',
  }
}

const newPostTest = () => describe('POST /newPost', () => {
  it('requires an auth object', async () => {
    const before = await countPosts();
    try {
      const resp = await request({
        method: 'POST',
        url: 'http://localhost:5000/newPost',
        body: _.omit(newPost, 'auth'),
        json: true,
        resolveWithFullResponse: true,
      });
    } catch (e) {
      const after = await countPosts();
      expect(e.statusCode).to.equal(400);
      expect(before).to.equal(after);
      return;
    }
    expect(true).to.be.false;
  });
  it('requires a correct password', async () => {
    const badPass = _.cloneDeep(newPost);
    badPass.auth.password = 'derp';
    const before = await countPosts();
    try {
      const resp = await request({
        method: 'POST',
        url: 'http://localhost:5000/newPost',
        body: badPass,
        json: true,
        resolveWithFullResponse: true,
      });
    } catch (e) {
      const after = await countPosts();
      expect(e.statusCode).to.equal(400);
      expect(before).to.equal(after);
      return;
    }
    expect(true).to.be.false;
  });
  it('requires a body', async () => {
    const before = await countPosts();
    try {
      const resp = await request({
        method: 'POST',
        url: 'http://localhost:5000/newPost',
        body: _.omit(newPost, 'body'),
        json: true,
        resolveWithFullResponse: true,
      });
    } catch (e) {
      const after = await countPosts();
      expect(e.statusCode).to.equal(400);
      expect(before).to.equal(after);
      return;
    }
    expect(true).to.be.false;
  });
  it('saves a post', async () => {
    const before = await countPosts();
    newPost._id = 'test__';
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/newPost',
      body: newPost,
      json: true,
      resolveWithFullResponse: true,
    });
    const after = await countPosts();
    expect(resp.statusCode).to.equal(200);
    expect(resp.body.message).to.equal('Post added');
    expect(before).to.equal(after - 1);
  });
});

export default newPostTest;
