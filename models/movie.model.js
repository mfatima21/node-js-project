
const mongoose= require('mongoose');

const movies = mongoose.Schema(
  {
    title: {
      type: String ,
      required:true
    },
    cast: {
      type : [mongoose.Types.ObjectId] ,
      required: true,
      ref: "Cast",
      autopopulate: { maxDepth: 2 }
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Movie", movies);