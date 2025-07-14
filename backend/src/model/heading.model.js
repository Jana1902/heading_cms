import mongoose from "mongoose";

const headingSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Heading = mongoose.model("Heading", headingSchema)

export default Heading