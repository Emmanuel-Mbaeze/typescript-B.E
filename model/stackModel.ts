import mongoose from "mongoose";

type Stack = {
  name: string;
  student: {};
  course: {}[];
};

interface StackRecord extends Stack, mongoose.Document {}

const StackModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<StackRecord>("stacks", StackModel);
