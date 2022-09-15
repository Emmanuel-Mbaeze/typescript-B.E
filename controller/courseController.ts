import { Response, Request } from "express";
import stackModel from "../model/courseModel";
import studentModel from "../model/stackModel";
import mongoose from "mongoose";

type Student = {
  name: string;
};

const createStack = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name } = req.body;
    const getStudents = await studentModel.findById(req.params.id);
    const myStack = await stackModel.create({
      name,
    });

    getStudents?.course.push(new mongoose.Types.ObjectId(myStack._id));
    getStudents?.save();

    return res.status(201).json({
      status: "Course record has been added successfully",
      data: myStack,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const readStack = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getStack = await studentModel.findById(req.params.id).populate({
      path: "course",
      options: { createdAt: -1 },
    });
    return res.status(201).json({
      status: "Here are your Course Data",
      data: getStack,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export { createStack, readStack };
