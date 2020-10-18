//-----------express 
const express = require("express");
const app = express();

//---------libs
const body = require("body-parser");
const mongoose = require("mongoose");

//-----------routes
const ThingRoutes = require("./routes/thing");
const UserRoutes = require("./routes/user");

//-------config
const config = require("./config/variables");

mongoose
  .connect(
    `mongodb+srv:// ${config.USERNAME}:
                    ${config.PASSWORD}@
                    ${config.CLUSTER_NAME}.
                    yavfl.mongodb.net/cluster0?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(body.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", ThingRoutes);
app.use("/api/auth", UserRoutes);

module.exports = app;
