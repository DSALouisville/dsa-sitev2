import bcrypt from 'bcrypt';
import MongoClient from 'mongodb';

const url = 'mongodb://localhost:27017/test';

export const store = (username, plainPass) => {
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw new Error('Error generating salt');
    }
    bcrypt.hash(plainPass, salt, (err, hash) => {
      if (err) {
        throw new Error('Error generating hash');
      }
      MongoClient.connect(url, async (error, db) => {
        if (error) {
          console.log('Connection Error(newPost): ', error);
        }
        const coll = db.collection('users');
        const user = await coll.findOne({ username });
        if (!user._id) {
          throw new Error('Could not find user');
        }
        try {
          coll.update({ _id: user._id }, {$set: { hashedPassword: hash}});
        } catch(e) {
          console.log(`Could no save hashedPassword: ${e}`);
        }
        db.close();
      });
    });
  });
};

export const check = async (username, plainPass) => {
  const db = await MongoClient.connect(url)
  const coll = db.collection('users');
  const user = await coll.findOne({ username });
  const hashedPass = user.hashedPassword;
  const result = await bcrypt.compare(plainPass, hashedPass);
  db.close();
  return await result;
};
