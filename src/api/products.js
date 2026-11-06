const API_URL = "/api/products";

const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const createProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  return response.json();
};

export { getProducts, createProduct };
