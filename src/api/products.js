import axios from "axios";
export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "  http://localhost:5001/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};
export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5001/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};
export const addAProduct = async (product) => {
  let res = await axios({
    method: "post",
    url: `http://localhost:5001/products`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(product),
  }).catch((err) => console.log(err));
  console.log(res);
  return res;
};
export const changeAProduct = async (id, product) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5001/products/${id}`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(product),
  }).catch((err) => console.log(err));
  return res;
};
export const deleteProduct = async (id) => {
  await axios({
    method: "delete",
    url: `http://localhost:5001/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
};
