const WC_URL = process.env.NEXT_PUBLIC_WC_URL;
const KEY = process.env.WC_CONSUMER_KEY;
const SECRET = process.env.WC_CONSUMER_SECRET;

const auth = Buffer.from(`${KEY}:${SECRET}`).toString("base64");

export async function wcFetch(endpoint: string) {
  const res = await fetch(`${WC_URL}${endpoint}`, {
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`WC API error: ${res.status}`);
  return res.json();
}

// Helpers listos para usar
export const getProducts = () =>
  wcFetch("/products?per_page=100&status=publish");
export const getProduct = (id: number) => wcFetch(`/products/${id}`);
export const getCategories = () =>
  wcFetch("/products/categories?per_page=100");
export const getOrders = () => wcFetch("/orders");
