import app from "@/app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";
import { createLogin, createUser } from "../factories/user-factory";
import * as jwt from "jsonwebtoken";
import { createSpeciality, createUserStaff } from "../factories/user-staff-factory";

const server = supertest(app);
beforeAll(async () => {
  await cleanDb();
});

describe("POST /user/staff", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.post("/user/staff");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();

    const response = await server.post("/user/staff").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  it("should respond with status 401 if there is no session for given token", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = "Profissional da saúde";
    const userWithoutSession = await createUser(emailCreated, passwordCreated, userType);
    const token = jwt.sign(
      { userId: userWithoutSession.id },
      process.env.JWT_SECRET
    );
    const response = await server.post("/user/staff").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  describe('when token is valid', () => {
    it("should respond with status 409 when userStaff already registered", async () => {
        const emailCreated = faker.internet.email();
        const passwordCreated = faker.internet.password();
        const userType = "Profissional da saúde";
        const user = await createUser(emailCreated, passwordCreated, userType);
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET
        );
        await createLogin(user.id, token)
        //criar especilaidade
        const speciality = await createSpeciality()
        //criar registro
        const registered = await createUserStaff(speciality.id, user.id)
        const response = await server.post("/user/staff").set("Authorization", `Bearer ${token}`);
      });
  })
});