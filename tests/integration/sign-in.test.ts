import app from "@/app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import httpStatus from "http-status";
import { faker } from "@faker-js/faker";
import { createUser } from "../factories/user-factory";

const server = supertest(app);
beforeAll(async () => {
  await cleanDb();
});

describe("POST /sign-in", () => {
  it("Should respond with status 400 when body is not given", async () => {
    const response = await server.post("/sign-in");
    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
  it("Should respond with status 401 when user does not have registered email", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const form = {
      email: emailCreated,
      password: passwordCreated,
    };
    const response = await server.post("/sign-in").send(form);
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  it("Should respond with status 401 when the password is wrong", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = 'Recepcionista'
    await createUser(emailCreated, passwordCreated, userType)
    const randomPassword = faker.internet.password()
    const form = {
      email: emailCreated,
      password: randomPassword,
    };
    const response = await server.post("/sign-in").send(form);
    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });
  it("Should respond with status 200 when status OK and logged in", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = 'Recepcionista'
    await createUser(emailCreated, passwordCreated, userType)
    const form = {
      email: emailCreated,
      password: passwordCreated,
    };
    const response = await server.post("/sign-in").send(form);
    expect(response.status).toBe(httpStatus.OK);
  });
});
