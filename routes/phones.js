// var express = require("express");
// var router = express.Router();
// const databases = require("../phones.json");

// router.get("/phones", (req, res) => {
//   res.json(databases);
// });

// router.get("/get-phone/:id", async (req, res) => {
//   try {

//     res.json(singlephone);
//   } catch (err) {
//     res.json(err.message);
//     res.json({ message: "No phone found" });
//   }
// });

// module.exports = router;

const { ADDRGETNETWORKPARAMS } = require("dns");
var express = require("express");
var router = express.Router();
var fs = require("fs");
var data = fs.readFileSync("phones.json");
var elements = JSON.parse(data);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Express" });
});

router.get("/all", function (req, res) {
  res.json({ elements });
});

router.get("/phones/:id", function (req, res) {
  try {
    const phoneToFind = req.params.id;
    if (elements[phoneToFind]) {
      res.json(elements[phoneToFind]);
    } else {
      res.json({ message: "phone not found" });
    }
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
