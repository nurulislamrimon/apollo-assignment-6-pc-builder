import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.db_uri;

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function dbConnection() {
  try {
    console.log("Database connection successfull!");
    return await client.connect();
  } catch (e) {
    console.log(e);
  }
}

export default dbConnection;
