module.exports.requireLogin = (req, res, next) => {
  if (!req.user) {
    res.status(400).send({ error: "You must log in!" });
  }
  next();
};
module.exports.requireCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    res.status(403).send({ error: "Not enough credits" });
  }
  next();
};
