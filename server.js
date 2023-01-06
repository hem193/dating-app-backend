import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url =
  "mongodb+srv://hemanth:nifa03fdsu@cluster0.2d1dx.mongodb.net/datingDB?retryWrites=true&w=majority";

//Middleware

//DB Config
mongoose.connect(connection_url, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
