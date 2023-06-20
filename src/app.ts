import express, { Express } from "express";
import cors from "cors";
import { staffRouter, userRouter, recepcionistRouter } from "./routers";
import { handleApplicationErrors } from "./middlewares";
import { loginRouter } from "./routers/sign-in-router/sign-in-router";
import { logOutRouter } from "./routers/log-out-router/log-out-router";
import { patientRouter } from "./routers/patient-router/patient-router";

const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => res.send('OK!'))
app.use('/user', userRouter)
app.use('/sign-in', loginRouter)
app.use('/logout', logOutRouter)
app.use('/user/staff', staffRouter)
app.use('/medical-record', patientRouter)
app.use('/user/recepcionist', recepcionistRouter)
app.use(handleApplicationErrors)

export default app;