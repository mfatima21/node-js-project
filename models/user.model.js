const mongoose= require('mongoose');

const user = new mongoose.Schema({
    first_name: {
     type: String,
     required: true
    },
    last_name: {
     type: String,
     required: true
    },
    user_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
    },
    {
        timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model("User", user);