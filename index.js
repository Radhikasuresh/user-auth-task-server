const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const db = require("./database/db");

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("server working🔥");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
