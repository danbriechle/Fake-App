export async function fetchBooks(quantity?: number) {
    const FAKER_BASE_URL = "https://fakerapi.it/api/v2"
    const response = await fetch(`${FAKER_BASE_URL}/books?_quantity=${quantity}`)

    return response.json()
}