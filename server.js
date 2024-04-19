const express = require("express");
const app = express();
const cors = require("cors");
const emailSend = require("./routes/mailRoutes");
const mongoose = require("mongoose");
const multer = require("multer");

app.use(cors());
app.use(express.json());

// const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/email-collection", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const upload = multer({ dest: "uploads/" });

app.use("/", emailSend);

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:3000`);
// });
app.listen(5500,()=>{
  console.log('server is running on 5000');
})
