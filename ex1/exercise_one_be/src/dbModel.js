const mongoose = require("mongoose");

const VideosSchema = new mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: String,
  shares: String,
  messages: String,
});

const videos = mongoose.model("videos", VideosSchema);

module.exports = videos;
