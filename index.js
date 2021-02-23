const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const api = require("./router");

app.use("/", api);

app.get("*", async (req, res) => {
  res.redirect("https://www.apimau.ga");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
