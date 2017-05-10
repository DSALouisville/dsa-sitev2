import 'babel-polyfill';
import MongoClient from 'mongodb';
import _ from 'lodash';
import { check } from './hashPass';
import shortid from 'shortid';

const url = 'mongodb://localhost:27017/test';

const validate = (post) => typeof post.body === 'string';

const authenticate = async (post) => {
  if (post.auth && post.auth.username && post.auth.password) {
    const db = await MongoClient.connect(url);
    const coll = db.collection('users');
    let user = {};
    try {
      user = await coll.findOne({ username: post.auth.username });
    } catch (e) {
      return false;
    }
    return check(post.auth.username, post.auth.password, user.hashedPassword);
  }
  return false;
};

const newPost = async (req, res) => {
  if (!validate(req.body)) {
    res.status(400).send({ message: 'Post must include a body' });
    return;
  }
  const auth = await authenticate(req.body);
  if (!auth) {
    res.status(400).send({ message: 'Not authorized' });
    return;
  }
  req.body._id = shortid.generate();
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(newPost): ', error);
    }
    const coll = db.collection('posts');
    try {
      const post = await coll.insert(_.omit(req.body, 'auth'));
    } catch (e) {
      console.log(`Could not save post: ${e}`);
    }
    res.send(JSON.stringify({ message: 'Post added' }));
    db.close();
  });
};

export default newPost;
