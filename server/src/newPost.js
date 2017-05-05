import MongoClient from 'mongodb';

const url = 'mongodb://localhost:27017/test';

const newPostTest = (req, res) => {
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(newPost): ', error);
    }
    const coll = db.collection('posts');
    const post = await coll.insert(req.body);
    res.send('Post added');
    db.close();
  });
};

export default newPostTest;
