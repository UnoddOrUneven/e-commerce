import {it,expect,} from "vitest";
import request from "supertest";
import app from "../server/app";

it("POST api/users/create creates a user", async () => {
    const response = await request(app)
        .post("/api/users/create")
        .send({
            name: "user",
            password: "password"
        })
        expect(response.statusCode).toBe(201);
})
