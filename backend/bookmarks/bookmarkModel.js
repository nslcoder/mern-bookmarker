const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookmarkSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    domainName: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Bookmark', bookmarkSchema);
