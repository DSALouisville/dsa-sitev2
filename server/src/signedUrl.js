import 'babel-polyfill';
import MongoClient from 'mongodb';
import _ from 'lodash';
import aws from 'aws-sdk';
import shortid from 'shortid';
import { check } from './hashPass';

const url = `${process.env.mongoUrl}`;

const authenticate = async (post) => {
  if (post.username && post.password) {
    const db = await MongoClient.connect(url);
    const coll = db.collection('users');
    let user = {};
    try {
      user = await coll.findOne({ username: post.username });
    } catch (e) {
      return false;
    }
    return check(post.username, post.password, user.hashedPassword);
  }
  return false;
};

const signedUrl = async (req, res) => {
  const auth = await authenticate(req.body);
  if (!auth) {
    res.status(400).send({ message: 'Not authorized' });
    return;
  }
  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: 'us-east-1',
  });
  const key = shortid.generate();
  const params = { Bucket: 'dsa-blog-assets', Key: key };
  const sUrl = s3.getSignedUrl('putObject', params)
  res.send(JSON.stringify({ key, url: sUrl }));
}

export default signedUrl;
