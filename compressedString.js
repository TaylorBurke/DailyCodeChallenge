const compressString = (string) => {
  // Write a function called compressString that takes a string str as input and returns a compressed version of the string using the counts of repeated characters. If the compressed string is not shorter than the original string, return the original string.
  let compressedString = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      compressedString += string[i] + count;
      count = 1;
    }
  }
  return compressedString.length < string.length ? compressedString : string;
};

console.log(compressString("aabbbaa"));

todoRouter.get("/user", (req, res, next) => {
  Todo.find({ user: req.auth._id }, (err, todos) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(todos);
  });
});
