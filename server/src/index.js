import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/postList', (req, res) => {
  res.status(200).send('200');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

export default app;
