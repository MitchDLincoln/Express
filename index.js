const express = require("express");
const exphbs = require("express-handlebars");

// Crea l'applicazione
const app = express();

// Inizializzo Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("home"));

// Porta in Ascolto
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
