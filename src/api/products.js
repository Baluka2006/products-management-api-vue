const API_URL = "/api/products";

const getProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export { getProducts };
