const express = require("express");

const app = express();

app.all("*", (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

  console.log(fullUrl);

  res.send("Hello World!");
});

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}...`));
