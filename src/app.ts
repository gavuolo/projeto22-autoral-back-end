import express, { Express } from "express";
import cors from "cors";
import { userRouter } from "./routers";

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app.use('/register', userRouter)

export default app;