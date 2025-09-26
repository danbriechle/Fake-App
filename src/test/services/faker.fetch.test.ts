import { describe, it, expect, beforeEach, vi } from "vitest"

const FIXTURE = { status: "OK", code: 200, total: 3, data: [{
      title: "mip moop",
      author: "woopy",
      genre: "doop",
      description: "bloop mip",
      isbn: "9780000000001",
      image: "https://picsum.photos/seed/birthday",
      published: "09-20-2025",
      publisher: "bop boop"
    },
    {title: "moop mip",
      author: "dooply",
      genre: "doop",
      description: "bloop mip",
      isbn: "9780000000001",
      image: "https://picsum.photos/seed/birthday",
      published: "09-20-2025",
      publisher: "bap boop"
    },
    { title: "woop moop",
      author: "moopy",
      genre: "doop",
      description: "bloop oop",
      isbn: "9780000000001",
      image: "https://picsum.photos/seed/birthday",
      published: "09-20-2025",
      publisher: "boop boop"
    }]
  }

let fetchSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  process.env.FAKER_BASE_URL = "https://fakerapi.it/api/v2";

  fetchSpy = vi.spyOn(global, "fetch" as any).mockResolvedValue({
    ok: true,
    json: async () => FIXTURE,
    status: 200,
  } as any);
})

describe("fakerService.fetchBooks", () => {
  it("can be called called for the books resource", async () => {
    const { fetchBooks } = await import("@/services/faker")
    const json = await fetchBooks()
    expect(json.code).toEqual(200)
    expect(json.status).toEqual('OK')
    expect(json.data[0]).toMatchObject({
      title:  "mip moop",
      author:  "woopy",
    })
  })

  it("can return a specific quantity of the books resource", async () => {
    const { fetchBooks } = await import("@/services/faker")
    const json = await fetchBooks(3)
    expect(json.code).toEqual(200)
    expect(json.status).toEqual('OK')
    expect(json.total).toEqual(3)
  })
})
