import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})

console.log("Hello")

app.listen(4000, () => {
    console.log('The application is listening on port 4000!');
})