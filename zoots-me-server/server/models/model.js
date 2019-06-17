const mongoose = require('../db.js');

const eventsSchema = mongoose.Schema({
      uuid: String,
      email: String,
      imageUrl: String,
      voteCount: Number
});

module.exports = mongoose.model('photo-metadata', eventsSchema);