import mongoose from "mongoose";

type Student = {
  name: string;
  color: string;
  height: number;
  short: boolean;
  stack: {}[];
};

interface StudentRecord extends Student, mongoose.Document {}

const studentModel = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
    height: {
      type: Number,
    },
    short: {
      type: Boolean,
    },
    stack: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "stacks",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<StudentRecord>("users", studentModel);
