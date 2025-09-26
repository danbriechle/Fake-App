export async function fakerFetch(resource: string, quantity?: number) {
    const FAKER_BASE_URL = "https://fakerapi.it/api/v2"
    const response = await fetch(`${FAKER_BASE_URL}/${resource}?_quantity=${quantity}`)

    return response.json()
}