import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';

const newPost = {
  username: 'test',
  password: 'password',
}

const signedUrlTest = () => describe('POST /signedUrl', () => {
  it('requires a username', async () => {
    try {
      const resp = await request({
        method: 'POST',
        url: 'http://localhost:5000/signedUrl',
        body: _.omit(newPost, 'username'),
        json: true,
        resolveWithFullResponse: true,
      });
    } catch (e) {
      expect(e.statusCode).to.equal(400);
      return;
    }
    expect(true).to.be.false;
  });
  it('requires a correct password', async () => {
    const badPass = _.cloneDeep(newPost);
    badPass.password = 'derp';
    try {
      const resp = await request({
        method: 'POST',
        url: 'http://localhost:5000/signedUrl',
        body: badPass,
        json: true,
        resolveWithFullResponse: true,
      });
    } catch (e) {
      expect(e.statusCode).to.equal(400);
      return;
    }
    expect(true).to.be.false;
  });
  it('returns a signed url', async () => {
    const resp = await request({
      method: 'POST',
      url: 'http://localhost:5000/signedUrl',
      body: newPost,
      json: true,
      resolveWithFullResponse: true,
    });
    expect(resp.body.url).to.include('AWSAccessKeyId');
  });
});

export default signedUrlTest;
