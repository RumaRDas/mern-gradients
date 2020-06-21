const mongoose = require("mongoose");
const db = "mongodb://localhost/mern_gradient";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://subroto:qwertyuiop@cluster0-m86si.mongodb.net/gradient_db?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log("mongodb is successfully connected...");
  } catch (error) {
    console.log("error " + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
