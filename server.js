const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./connection");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5002;

app.listen(PORT, console.log(`server started at ${PORT}`));
