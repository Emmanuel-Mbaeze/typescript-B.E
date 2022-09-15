import express from "express";
import { createStack, readStack } from "../controller/stackController";

const router = express.Router();

router.route("/:id").get(readStack);
router.route("/:id/create").post(createStack);

export default router;
