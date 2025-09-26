# FakeApp
![Uploading Screenshot 2025-09-26 at 12.33.31 PM.png…]()

A tiny **Next.js + TypeScript** app that pulls **books** from the Faker API and displays them in a simple grid. It includes a minimal home page and a books index page.

## Tech Stack

- **Next.js (App Router)** + **TypeScript**
- **React**
- **Tailwind CSS v4** (utility classes in `globals.css`)
- **Vitest** for unit tests

## Features

- **Home → Books** navigation (App Router).
- **Books index** renders a responsive grid of cards.
- **Stable images** even when Faker returns dead URLs: a `BookModel` normalizes each API book and **generates a Picsum image seeded by ISBN**.

## Project Structure


## How Data Flows

1. `services/faker.ts` calls `https://fakerapi.it/api/v2/books?_quantity=N`.
2. The JSON is typed as `BooksApiResponse` (from `types/book-api.ts`).
3. Each raw book is mapped to a **`BookModel`** (in `models/book.ts`), which:
   - Copies fields from the API object.
   - Generates a **Picsum** cover:  
     `https://picsum.photos/seed/<ISBN>/480/320`
4. Pages render `BookModel[]` (so `book.image` is always usable).

Getting started

Install deps and run the dev server:
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Scripts
```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # eslint
npm run test     # vitest
```

## Testing
```bash
npm run test
```

## What’s covered:

Model: constructs from API shape; image URL is Picsum seeded by ISBN.
Service: calls the correct URL and returns BookModel[].

## Notes / trade-offs

### Performance:
The books page fetches live data on each request. In a real app, consider caching, ISR, or prefetching.

### Styling:
Layout is intentionally simple; a global top nav + tabbed content on Home would be a nice enhancement.

### Images:
Faker’s legacy image hosts are flaky; BookModel ensures consistent covers via Picsum.

### Env config:
The Faker base URL is currently hard-coded in services/faker.ts. You can move it to an env var later

### Future improvements
Top nav with tabs that render books without navigating (client tabs).
Search/filter (by title/author/genre).

Add more Faker resources (users, companies) with their own models.
CI (GitHub Actions) to run lint + tests on PRs.
