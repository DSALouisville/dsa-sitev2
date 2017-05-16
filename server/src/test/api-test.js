import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';
import postListTest from './postListTest';
import postIdTest from './postIdTest';
import newPostTest from './newPostTest';
import { setup, tearDown } from './helpers';


describe('API', () => {
  before (async () => {
    await setup();
  });
  after(async () => {
    await tearDown();
  });
  describe('Routes respond', () => {
    it ('responds at GET /postList', async () => {
      const resp = await request({
        method: 'GET',
        url: 'http://localhost:5000/postList',
        resolveWithFullResponse: true,
      });
      expect(resp.statusCode).to.equal(200);
    });
    it ('responds at POST at /newPost', async () => {
      try {
        const resp = await request({
          method: 'POST',
        url: 'http://localhost:5000/newPost',
          resolveWithFullResponse: true,
        });
      } catch(e) {
        expect(e.statusCode).to.equal(400);
      }
    });
    it ('responds at GET at /post/{id}', async () => {
      const resp = await request({
        method: 'GET',
        url: 'http://localhost:5000/post/001',
        resolveWithFullResponse: true,
      });
      expect(resp.statusCode).to.equal(200);
    });
  });

  postListTest();

  postIdTest();

  newPostTest();

});
