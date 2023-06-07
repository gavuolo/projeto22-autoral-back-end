import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routers";
import { handleApplicationErrors } from "./middlewares";
import { loginRouter } from "./routers/sign-in-router/sign-in-router";

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app.use('/user', userRouter)
app.use('/sign-in', loginRouter)
app.use(handleApplicationErrors)

export default app;