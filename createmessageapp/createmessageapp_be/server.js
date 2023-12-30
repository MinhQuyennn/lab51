// server.js

const express = require("express");
const mongoose = require("mongoose");
const Messages = require("./dbMessages.js");
const Pusher = require("pusher");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

const pusher = new Pusher({
  appId: "1729599",
  key: "2a15456e5eeec6ce648e",
  secret: "155913438a77a3ef669f",
  cluster: "ap2",
  useTLS: true,
});

app.use(express.json());
app.use(cors());

const uri = "mongodb://localhost:27017/myDatabase";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const db = mongoose.connection;

app.get("/", (req, res) => res.status(200).send("hello UIT guys"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", async (req, res) => {
  try {
    const data = await Messages.find().exec();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => console.log(`Listening on localhost:${port}`));
