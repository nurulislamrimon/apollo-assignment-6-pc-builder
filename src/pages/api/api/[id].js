import dbConnection, { client } from "@/libs/mongdb";

async function run(req, res) {
  try {
    const { id } = req.query;
    await dbConnection();

    const data = await client
      .db("pc-builder")
      .collection("products")
      .findOne({ id: Number(id) });
    res.json({ success: true, data });
  } catch (e) {
    console.log(e);
  }
}

export default run;
