const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    favourites: {
      type: [Number], // Store movie IDs as numbers
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
