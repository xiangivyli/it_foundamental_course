const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// Connect to MongoDB
const url = process.env.MONGO_URL || "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database and collection names
const dbName = process.env.DB_NAME || "teamable_demo";
const collectionName = "profiles";


app.use(express.json());   
app.use('/', express.static(__dirname + '/dist'));

app.get('/get-profile', async function(req, res) {
  // Get data from the database
  const response = {
    name: "Ivy Li",
    email: "xiangivyli@gmail.com",
    position: "Data Engineer with full stack experience",
    location: "Bristol, UK",
    skills: "Problem Solving"
  }

  // Connect to mongoDB database
  await client.connect();
  console.log("Connected to MongoDB");
  // get data from mongoDB

  res.send(response);
});

app.get('/all-profiles', async function(req, res) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  const profiles = await collection.find().toArray();
  res.send(profiles);
});


app.post('/update-profile', async function(req, res) {
  const payload = req.body;

  if (Object.keys(payload).length === 0) {
    return res.status(400).send({ error: "Empty payload, could not update profile" });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.insertOne(payload);

    res.status(200).send({ status: "success", message: "Profile updated successfully!" });
    console.log('Updated Profile:', payload);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to update profile" });
  } finally {
    await client.close();
  }
});


app.listen(3000, function(){
  console.log('Server is running on http://localhost:3000');
});