const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./connection");

const app = express();
dotenv.config();
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});
const PORT = process.env.PORT || 5002;

app.listen(PORT, console.log(`server started at ${PORT}`));
