import request from "supertest"

import {app, prisma} from "@/app"

afterAll(() => {
    prisma.$disconnect()
})

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/").expect(200, "[{\"email\":\"bob@prisma.io\",\"name\":\"Bob\"}]")
    })
})
