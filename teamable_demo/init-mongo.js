db = db.getSiblingDB('teamable_demo');

db.createCollection('profiles');

db.profiles.insertOne({
  name: "Ivy Li",
  email: "xiangivyli@gmail.com",
  position: "Data Engineer with full stack experience",
  location: "Bristol, UK",
  skills: "Problem Solving"
});
