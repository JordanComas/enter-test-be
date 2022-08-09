var express = require("express");
var router = express.Router();
// const databases = require("../phones.json");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// router.get("/phones", (req, res) => {
//   res.json(databases);
// });

module.exports = router;
