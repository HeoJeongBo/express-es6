import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "normal"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

// arrow function 으로 하면 this binding 안되서 function 으로
userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 8);
  next();
});

userSchema.methods.validateHash = function(password) {
  bcrypt.compareSync(password, this.password);
};

export default mongoose.model("User", userSchema);
