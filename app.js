const express = require("express");

const app = express();

app.all("*", (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

  res.send("Hello World!");
});

app.listen(3000, () => console.log("Listening on..."));
