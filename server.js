const express = require("express");
const app = express();
const port = 3000;

//Inicialização do servidor na porta 3000
app.listen(port, () => {
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => {
  res.status(200).send("Server running.");
});