import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { validateBody } from "@/middlewares";
import { createUserRecepcionistSchema, updateUserRecepcionistSchema } from "@/schemas/user-recepcionist-schema";
import { recepcionistCreate, recepcionistUpdate } from "@/controllers";

const recepcionistRouter = Router();
recepcionistRouter.all("*", authenticateToken);
recepcionistRouter.post("/", validateBody(createUserRecepcionistSchema), recepcionistCreate);
recepcionistRouter.patch("/update", validateBody(updateUserRecepcionistSchema), recepcionistUpdate);
recepcionistRouter.delete("/delete")
export { recepcionistRouter };