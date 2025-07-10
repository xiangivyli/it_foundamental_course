const express = require('express');
const app = express();
const { Pool } = require('pg');

// Connect to db
const client = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "db",
  database: process.env.DB_NAME || "teamable_demo",
  password: process.env.DB_PASSWORD || "password",
  port: process.env.DB_PORT || 5432,
});


app.use(express.json());   
app.use('/', express.static(__dirname + '/dist'));

app.get('/get-profile', async function(req, res) {
  // Get data from the database
  try {
    const result = await client.query('SELECT * FROM profiles.user_info LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).send({ error: "Failed to fetch profile" });
  };
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