const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = process.env.DB_NAME || "teamable_demo";
const collectionName = "profiles";

app.use(express.json());
app.use('/', express.static(__dirname + '/dist'));

app.get('/get-profile', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const profile = await collection.findOne({}, { sort: { _id: -1 } });

    if (!profile) {
      return res.status(404).send({ error: "No profile found" });
    }

    res.send(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch profile" });
  }
});


//currently, not in use
app.get('/all-profiles', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const profiles = await collection.find().toArray();
    res.send(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch profiles" });
  }
});

app.post('/update-profile', async (req, res) => {
  const payload = req.body;

  if (Object.keys(payload).length === 0) {
    return res.status(400).send({ error: "Empty payload, could not update profile" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.updateOne({}, { $set: payload }, { upsert: true });

    res.status(200).send({ status: "success", message: "Profile updated successfully!" });
    console.log('Updated Profile:', payload);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to update profile" });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
