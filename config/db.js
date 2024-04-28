import mongoose from "mongoose";

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/test");
    console.log('connect with db');
  } catch (error) {
    throw new error("faild to connect with db");
  }
};
export default connect;