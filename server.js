const express = require("express");
const path = require("path");

const PORT = 5000;
const isDev = process.env.NODE_ENV !== "production";

const app = express();

app.get("/username", (req, res) => {
  res.json({
    username: "My name is Eason",
  });
});

if (!isDev) {
  app.use("/", express.static(path.resolve(__dirname, "./client/build")));
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
