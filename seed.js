require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const users = [
  {
    username: "SampleUser1",
    email: "sampleuser1@example.com",
    password: "SuperSecret1",
  },
  {
    username: "BigBrainBrian",
    email: "bigbrainbrian@example.com",
    password: "BirdBrain2",
  },
];

async function seedDB() {
  await User.deleteMany({});
  await User.insertMany(users);
  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
