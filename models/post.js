const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
  title: {
    type: 'String',
    required: 'title is required'
    // minlength: 4,
    // maxlength: 250
  },
  body: {
    type: 'String',
    required: 'body is required',
    // minlength: 4,
    // maxlength: 2000
  }
});

module.exports = mongoose.model("Post", postSchema);