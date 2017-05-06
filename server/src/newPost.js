import 'babel-polyfill';
import MongoClient from 'mongodb';
import _ from 'lodash';

const url = 'mongodb://localhost:27017/test';

const validate = (body) => typeof body === 'string';

const newPost = (req, res) => {
  if (req.body && !validate(req.body.body)) {
    res.status(400).send({ message: 'Post must include a body'});
    return;
  }
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(newPost): ', error);
    }
    const coll = db.collection('posts');
    try {
      const post = await coll.insert(req.body);
    } catch (e) {
      console.log(`Could not save post: ${e}`);
    }
    res.send(JSON.stringify({ message: 'Post added' }));
    db.close();
  });
};

export default newPost;
