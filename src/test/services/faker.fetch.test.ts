import { describe, it, expect, beforeEach, vi } from "vitest"

const FIXTURE = { status: "OK", code: 200, total: 1, data: [{ title: "Example" }] }

describe("fakerService.fetchBooks", () => {
  it("can be called called for the books resource", async () => {
    const { fetchBooks } = await import("@/services/faker")
    const json = await fetchBooks()
    expect(json.code).toEqual(200)
    expect(json.status).toEqual('OK')
  })

  it("can return a specific quantity of the books resource", async () => {
    const { fetchBooks } = await import("@/services/faker")
    const json = await fetchBooks(3)
    expect(json.code).toEqual(200)
    expect(json.status).toEqual('OK')
    expect(json.total).toEqual(3)
  })
})
