const mongoose = require("mongoose");

const messagingSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const messagingmessages = mongoose.model("messagingmessages", messagingSchema);

module.exports = messagingmessages;
