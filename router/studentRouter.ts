import express from "express";
import {
  createStudent,
  deleteStudent,
  updateStudent,
  getStudent,
  getStudents,
} from "../controller/studentController";

const router = express.Router();

router.route("/").get(getStudents);
router.route("/create").post(createStudent);
router.route("/:id").get(getStudent);
router.route("/:id/edit").patch(updateStudent);
router.route("/:id/delete").delete(deleteStudent);

export default router;
