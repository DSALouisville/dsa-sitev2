import express from 'express';
import postList from './postList';
import postId from './postId';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/postList', postList);

app.post('/newPost', (req, res) => {
  res.send('200');
});

app.get('/post/:id', postId);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

export default app;
