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

describe("POST /user", () => {
  it("Should respond with status 400 when body is not given", async () => {
    const response = await server.post("/user");
    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
  it("Should respond with status 409 when user already has an account with the registered email ", async () => {
    //criar um usuário
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = "Recepcionista";
    await createUser(emailCreated, passwordCreated, userType);

    //criar o usuário novamente com o mesmo email.
    const form = {
      email: emailCreated,
      password: passwordCreated,
      confirmPassword: passwordCreated,
      userType: userType,
    };
    const response = await server.post("/user").send(form);
    expect(response.status).toBe(httpStatus.CONFLICT);
    expect(response.body).toEqual({
      name: "DuplicatedEmailError",
      message: "Já existe um usuário cadastrado com este e-mail",
    });
  });
  it("Should respond with status 409 when passwordConfirm is not the same as password", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = "Recepcionista";
    const randomPassword = faker.internet.password();
    const form = {
      email: emailCreated,
      password: passwordCreated,
      confirmPassword: randomPassword,
      userType: userType,
    };
    const response = await server.post("/user").send(form);
    expect(response.status).toBe(httpStatus.CONFLICT);
    expect(response.body).toEqual({
      name: "differentPasswordError",
      message: "As senhas devem ser iguais",
    });
  });
  it("Should respond with status 201 when user created", async () => {
    const emailCreated = faker.internet.email();
    const passwordCreated = faker.internet.password();
    const userType = "Recepcionista";
    const form = {
      email: emailCreated,
      password: passwordCreated,
      confirmPassword: passwordCreated,
      userType: userType,
    };
    const response = await server.post("/user").send(form);
    expect(response.status).toBe(httpStatus.CREATED);

  });
});
