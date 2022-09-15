import express from "express";
import { createStack, readStack } from "../controller/courseController";

const router = express.Router();

router.route("/:course/:id").get(readStack);
router.route("/:course/:id/create").post(createStack);

export default router;
