import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = () => {
  const connect = () => {
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on("error", console.error);
    db.once("open", () => {
      console.log("mongodb is connected");
    });
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  };
  connect();
  mongoose.connection.on("error", error => {
    console.log("몽고디비 연결 에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다");
    connect();
  });
};

export default dbConnect;
