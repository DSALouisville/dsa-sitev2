import MongoClient from 'mongodb';

const url = 'mongodb://localhost:27017/test';

const postList = (req, res) => {
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(postList): ', error);
    }
    const coll = db.collection('posts');
    let list = []
    try {
      list = await coll.find({}, {
        _id: 1,
        title: 1,
        excerpt: 1,
        author: 1,
        date: 1,
        tags: 1,
      }).toArray();
    } catch (e) {
      console.log(e);
    }
    res.send(list);
    db.close();
  });
};

export default postList;
