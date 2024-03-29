const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();

const logger = require("./middleware/logger");
const members = require("./Members");

// Init middleware
// app.use(logger);

// Handlerbars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// HomePage Route
app.get("/", (req, res) =>
  res.render("home", { Title: "Member App", members })
);

//Body Parser MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SET A STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

// Member API Routes
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
