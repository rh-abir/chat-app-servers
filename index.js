// importing
const express = require("express");
const mongoose = require("mongoose");

// app config
const app = express();
const port = process.env.PORT || 3000;

// middleware

//DB config

const connection_url = "mongodb+srv://chatapp:za3F6yuv694Fh0i6@cluster0.dia6qis.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ???

// api nroutes

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// listen
app.listen(port, () => console.log(`listening on ${port}`));
