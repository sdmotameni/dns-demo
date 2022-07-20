const express = require("express");

const app = express();

app.all("*", (req, res) => {
  console.log("HOST: " + req.get("host"));
  console.log("ORIGINAL URL: " + req.originalUrl);

  res.redirect("https://google.com/");
});

let port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening on ${port}...`));
