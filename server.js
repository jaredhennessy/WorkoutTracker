const express = require("express"),
  mongoose = require("mongoose"),
  path = require("path"),
  app = express(),
  PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

process.env.PWD = process.cwd();
console.log(process.cwd());
app.use(express.static(path.join(process.env.PWD, "/public/")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
