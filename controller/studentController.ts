import { Response, Request } from "express";
import studentModel from "../model/studentModel";

type newStudent = {
  name: string;
  height: number;
  short: boolean;
  color: string;
};

const getStudents = async (req: Request, res: Response): Promise<Response> => {
  try {
    const studentData = await studentModel.find();
    return res
      .status(200)
      .json({ message: "Students has been FOUND", data: studentData });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const getStudent = async (req: Request, res: Response): Promise<Response> => {
  try {
    const studentData: newStudent | null = await studentModel.findById(
      req.params.id
    );

    return res.status(200).json({
      message: `${studentData?.name} has been FOUND`,
      data: studentData,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const updateStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, height, color, short } = req.body;
    const studentData: newStudent | null = await studentModel.findByIdAndUpdate(
      req.params.id,
      { name, height, color, short },
      { new: true }
    );

    return res.status(200).json({
      message: `${studentData?.name} has been update`,
      data: studentData,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const deleteStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const studentData: newStudent | null = await studentModel.findByIdAndRemove(
      req.params.id
    );

    return res.status(200).json({
      message: `${studentData?.name} has been deleted`,
      data: studentData,
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

const createStudent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, height, color } = req.body;

    if (height > 250) {
      const studentData: newStudent | null = await studentModel.create({
        name,
        height,
        color,
        short: true,
      });
      return res.status(200).json({
        message: `${studentData?.name} has been created`,
        data: studentData,
      });
    } else {
      const studentData: newStudent | null = await studentModel.create({
        name,
        height,
        color,
        short: false,
      });
      return res.status(200).json({
        message: `${studentData?.name} has been created`,
        data: studentData,
      });
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export { createStudent, deleteStudent, updateStudent, getStudent, getStudents };
