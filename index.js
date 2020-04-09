const express = require("express");

// Crea l'applicazione
const app = express();




// Porta in Ascolto
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
