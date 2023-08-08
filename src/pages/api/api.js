import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.db_uri;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    if (req.method === "GET") {
      let products;
      let product;
      let relatedProduct;
      if (req.query.id) {
        product = await client
          .db("pc-builder")
          .collection("products")
          .findOne({ id: Number(req.query.id) });
        relatedProduct = await client
          .db("pc-builder")
          .collection("products")
          .find({ category: product.category })
          .toArray();
      } else {
        products = await client
          .db("pc-builder")
          .collection("products")
          .find({})
          .toArray();
      }
      res.json({ success: true, product, products, relatedProduct });
    }
    console.log("Database connection successfull!");
  } catch (e) {
    console.log(e);
  }
}

export default run;
