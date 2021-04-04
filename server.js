const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(express.static("public"));

app.post("/analytics", (req, res) => {
  console.log(req.body);
  res.sendStatus(204);
});

app.listen(8081, () => console.log("Listening on 8081"));
