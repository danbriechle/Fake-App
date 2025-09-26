import { describe, it, expect, beforeEach, vi } from "vitest"

const FIXTURE = { status: "OK", code: 200, total: 1, data: [{ title: "Example" }] }

describe("fakerService.fakerFetch", () => {
  it("can be called called for the books resource", async () => {
    const { fakerFetch } = await import("@/services/faker")
    const json = await fakerFetch('books')
    expect(json.code).toEqual(200)
    expect(json.status).toEqual('OK')
  })
})
