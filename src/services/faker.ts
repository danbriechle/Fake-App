export async function fakerFetch(resource: string) {
    const FAKER_BASE_URL = "https://fakerapi.it/api/v2"
    const response = await fetch(`${FAKER_BASE_URL}/${resource}`)

    return response.json()
}