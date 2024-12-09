const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("Hello from MERN API");
});

const userSchema = mongoose.Schema({
  name: String,
});

const User = mongoose.model("user", userSchema);

app.get("/get-users", async (req, res) => {
  const result = await User.find();
  return res.json(result);
});

app.post("/create-user", async (req, res) => {
  const result = await User.create(req.body);
  return res.json(result);
});

app.delete("/delete-user/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  return res.json(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
