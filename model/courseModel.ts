import mongoose from "mongoose";

type Course = {
  name: string;
  stack: [];
};

interface CourseRecord extends Course, mongoose.Document {}

const StackModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    stack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stacks",
    },
  },
  { timestamps: true }
);

export default mongoose.model<CourseRecord>("Courses", StackModel);
