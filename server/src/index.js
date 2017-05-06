import express from 'express';
import bodyParser from 'body-parser';
import postList from './postList';
import postId from './postId';
import newPost from './newPost';
import { store, check } from './hashPass';

const app = express();
app.use(bodyParser());

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/postList', postList);

app.post('/newPost', newPost);

app.get('/post/:id', postId);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

export default app;

