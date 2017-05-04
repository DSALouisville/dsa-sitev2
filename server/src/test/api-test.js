import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';

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
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/newPost',
      resolveWithFullResponse: true,
    });
    expect(resp.statusCode).to.equal(200);
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

