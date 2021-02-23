const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const api = require("./router");

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.set("json spaces", 2);

app.use("/", api);

app.get("*", async (req, res) => {
  res.redirect("https://www.apimau.ga");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
