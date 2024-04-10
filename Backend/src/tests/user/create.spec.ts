import { AppDataSource } from "./../../data-source";
import { DataSource } from "typeorm";
import app from "../../app";
import request from "supertest";

describe("Teste para metodo POST em /users", () => {
  let connection: DataSource;
  let testUser = {
    firstName: "Wyller",
    lastName: "Fernandes",
    phone: "41999999999",
    email: "wyller5@wyller.com",
    password: "123456",
  };

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Tentando criar um usuário", async () => {
    const response = await request(app).post("/users").send(testUser);

    expect(response.status).toEqual(201);
    expect(response.body.id.length).toEqual(36);
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        firstName: testUser.firstName,
        lastName: testUser.lastName,
        phone: testUser.phone,
        email: testUser.email,
        created_at: response.body.created_at,
        updated_at: response.body.updated_at,
      })
    );
  });

  test("Tentando criar um usuário com um email ja existente", async () => {
    const response = await request(app).post("/users").send(testUser);

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Tentando criar um usuário sem passar os dados", async () => {
    const response = await request(app).post("/users").send();

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("error");
  });
});
