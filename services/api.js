import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const get = async () => {
  const response = await axios.get(`${BASE_URL}/products`)
  return response.data;
};

export default get;
