const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://elementsbyrbf:jai0912@cluster0.gksxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const conn = async () => {
  await mongoose.connect(mongoURI, {});
  console.log("connected");
};
module.exports = conn;