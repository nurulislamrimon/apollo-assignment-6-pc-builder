import dbConnection, { client } from "@/libs/mongdb";

async function run(req, res) {
  try {
    const { category } = req.query;
    await dbConnection();

    const data = await client
      .db("pc-builder")
      .collection("products")
      .find({ category: category })
      .toArray();
    res.json({ success: true, data });
  } catch (e) {
    console.log(e);
  }
}

export default run;
