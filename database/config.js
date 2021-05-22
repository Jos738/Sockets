import mongoose from "mongoose";

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNX, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Base de datos Online");
  } catch (error) {
    throw new Error("Error al iniciar la DB");
  }
};

export default dbConection;
