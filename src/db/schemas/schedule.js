import mongoose from "mongoose";
import { stringify } from "querystring";

const { Schema } = mongoose;

const scheduleSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

export default mongoose.model("Schedule", scheduleSchema);
