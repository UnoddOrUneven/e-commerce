export async function getAllProducts() {
    const response = await fetch("/api/products/get-all");
    return await response.json();
}
