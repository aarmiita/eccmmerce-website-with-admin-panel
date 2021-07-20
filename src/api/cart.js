import axios from "axios";
export const getAllCart = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5001/cart",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  console.log("data has fetched Properly");
  return res;
};
export const changeACart = async (id, order) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5001/cart/${id}`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(order),
  }).catch((err) => console.log(err));
  return res;
};
