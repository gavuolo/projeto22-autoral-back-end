import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { speciality, updateUserStaff, userStaffCreate } from "@/controllers";
import { validateBody } from "@/middlewares";
import {
  createSpecialitySchema,
  createUserStaffSchema,
  updateUserStaffSchema,
} from "@/schemas/user-staff-schema";

const staffRouter = Router();
staffRouter.all("*", authenticateToken);
staffRouter.post("/speciality/create", validateBody(createSpecialitySchema), speciality);
staffRouter.post("/", validateBody(createUserStaffSchema), userStaffCreate);
staffRouter.patch("/update", validateBody(updateUserStaffSchema), updateUserStaff)
// staffRouter.get('/find')
// staffRouter.delete("/delete",)
export { staffRouter };