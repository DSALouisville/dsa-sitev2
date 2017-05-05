import 'babel-polyfill';
import { expect } from 'chai';
import app from '../index';
import request from 'request-promise';
import _ from 'lodash';

describe('API', () => {
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

  describe('GET /postList', () => {
    it('returns a JSON string (array)', async () => {
      const resp = await request({
        method: 'GET',
        url: 'http://localhost:5000/postList',
      });
      const json = JSON.parse(resp);
      expect(typeof resp).to.equal('string');
      expect(json).to.be.an.array;
    });
    it('returns the correct data', async () => {
      const resp = await request({
        method: 'GET',
        url: 'http://localhost:5000/postList',
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

  describe('GET /post/:id', () => {
    it('returns a JSON string (object)', async () => {
      const resp = await request({
        method: 'GET',
        url: 'http://localhost:5000/post/001',
      });
      const json = JSON.parse(resp);
      expect(typeof resp).to.equal('string');
      expect(json).to.be.an.object;
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
});
