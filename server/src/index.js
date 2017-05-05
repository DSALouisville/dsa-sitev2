import express from 'express';
import postList from './postList';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/postList', postList);

app.post('/newPost', (req, res) => {
  res.send('200');
});

app.get('/post/:id', (req, res) => {
  res.send('200');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

export default app;
