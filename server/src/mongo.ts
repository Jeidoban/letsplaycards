import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards?retryWrites=true&w=majority";

const mongoCommand = 'mongoimport --uri mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards --collection cards --type json --file cah-cards-full-2.json'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);