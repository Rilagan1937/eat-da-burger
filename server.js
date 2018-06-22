var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override")
var PORT = process.env.PORT || 8080;

var app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(methodOverride("_method"))

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes)


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
