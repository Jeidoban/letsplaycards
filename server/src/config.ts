import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards?retryWrites=true&w=majority";

export const client =  new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

