const express = require("express");
const router = express.Router();

const members = require("../../members");


// Get all Members
router.get("/", (req, res) => res.json(members));

// Get a Single Member
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: "Member Nonexistent" });
  }
});

module.exports = router;