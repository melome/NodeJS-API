const Post = require('../models/post');

exports.getPosts = (req, res) => {
  const post = Post.find().select("_id title body")
    .then(posts => {
      res.json({posts: posts});
    })
    .catch(err => {console.log(err)})
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then(result => {
      res.json({
        post: result
      });
  });

  //since error is already being handled by the validator  package in the helper folder
  // post.save((err, result) => {
  //   if (err) {
  //     return res.status(400).json({
  //       message: err.message
  //     });
  //   }

  //   res.status(200).json({
  //     post: result
  //   });
  // })
};