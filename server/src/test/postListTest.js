import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';

const postListTest = () => describe('GET /postList', () => {
  it('returns a JSON string (array)', async () => {
    const resp = await request({
      method: 'GET',
      url: 'http://54.162.114.80:5000/postList',
    });
    const json = JSON.parse(resp);
    expect(typeof resp).to.equal('string');
    expect(json).to.be.an.array;
  });
  it('returns the correct data', async () => {
    const resp = await request({
      method: 'GET',
      url: 'http://54.162.114.80:5000/postList',
    });
    const json = JSON.parse(resp);
    expect(json[0]).to.include.keys([
      '_id',
      'title',
      'author',
      'excerpt',
      'date',
      'tags',
    ]);
    expect(json[0]).to.not.include.keys([
      'body',
      'assets',
    ]);
  });
});

export default postListTest;
