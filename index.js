const express = require("express");
const path = require("path");
const app = express();

const members = require("./members");
const logger = require('./middleware/logger')

// Init middleware
app.use(logger);

// Get all Members
app.get("/api/members", (req, res) => res.json(members));

// SET A STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
