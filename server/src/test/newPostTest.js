import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';

const newPostTest = () => describe('POST /newPost', () => {
  it('returns a JSON string (string)', async () => {
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/newPost',
      body: {
        _id: 'test',
      },
      json: true,
    });
    const json = JSON.parse(resp);
    expect(typeof resp).to.equal('string');
    expect(json).to.be.a.string;
  });
  it('returns the correct data', async () => {
    const resp = await request({
      method: 'GET',
      url: 'http://localhost:5000/post/001',
    });
    const json = JSON.parse(resp);
    expect(json).to.include.keys([
      '_id',
      'title',
      'author',
      'excerpt',
      'date',
      'tags',
      'body',
      'assets',
    ]);
  });
});

export default newPostTest;
