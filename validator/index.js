exports.createPostValidator = (req, res, next) => {
  
  //title
  req.check("title", "title must not be empty").notEmpty();
  req.check("title", "title must be between 4 and 150").isLength({
    min: 4,
    max: 150
  });

  //body
  req.check("body", "body must not be empty").notEmpty();
  req.check("body", "body must be between 4 and 2000").isLength({
    min: 4,
    max: 2000
  });

  //check for errors
  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  //continue
  next();
}