const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/Home", (request, response, next) =>
  response.sendFile(__dirname + "/views/Home.html")
);

app.get("/About", (request, response, next) =>
  response.sendFile(__dirname + "/views/About.html")
);

app.get("/Works", (request, response, next) =>
  response.sendFile(__dirname + "/views/Works.html")
);

app.get("/Photo-Gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/Photo-Gallery.html")
);

app.listen(3000);
