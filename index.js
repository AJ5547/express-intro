const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("content"));

app.get("/colou?rs?", (req, res) => {
  res.send("gotcha\n");
});
app.get(/fly$/i, (req, res) => {
  res.send("Only i can fly \n");
});
app.get(/apple/i, (req, res) => {
  res.send("apple \n");
});
app
  .route("/banana")
  .get((req, res) => {
    res.send("get banana recipes\n");
  })
  .put((req, res) => {
    res.get("get put\n");
  })
  .delete((req, res) => {
    res.send("get deleted\n");
  });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
