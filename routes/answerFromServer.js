function answer(req, res, err, rows) {
  if (err){
    res.json(err);
  }
  res.json(rows);
}

module.exports = {
  answer: answer
};
