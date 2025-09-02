import { Router } from "express";
import { 
  getAll, 
  getById,
  save,
  update,
  deleteById 
} from "../controllers/shopping.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/add", save);
router.put("/:id", update);
router.delete("/:id", deleteById);

export default router
