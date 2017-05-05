import MongoClient from 'mongodb';

const url = 'mongodb://localhost:27017/test';
const initPost = {
  _id : '001',
  title : 'title',
  author : 'author',
  excerpt : 'Some of the thing',
  date : '2017-03-03',
  tags : [
    'a',
    'tag',
    'list',
  ],
  body : 'The body of the blog post',
  'assets' : [
    {
      url : 'a url',
      alt : 'alt text',
      type : 'image',
    },
  ],
}

const setup = () => {
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(test setup): ', error);
    }
    const coll = db.collection('posts');
    coll.remove({});
    coll.insert(initPost);
    db.close();
  });
}

const tearDown = () => {
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(test setup): ', error);
    }
    const coll = db.collection('posts');
    coll.remove({});
    db.close();
  });
}
