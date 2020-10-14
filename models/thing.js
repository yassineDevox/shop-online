const mongoose = require("mongoose");

thingShemas = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Thing',thingShemas);
