const mongoose= require('mongoose');

const cast =  new mongoose.Schema({
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
    },
    {
        timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
        }
    }
);

module.exports = mongoose.model("Cast", cast);