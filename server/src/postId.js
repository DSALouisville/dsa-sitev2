import MongoClient from 'mongodb';

const url = `${process.env.mongoUrl}`;

const postId = (req, res) => {
  MongoClient.connect(url, async (error, db) => {
    if (error) {
      console.log('Connection Error(postId): ', error);
    }
    const coll = db.collection('posts');
    const post = await coll.findOne({_id: req.params.id});
    res.send(post);
    db.close();
  });
};

export default postId;
