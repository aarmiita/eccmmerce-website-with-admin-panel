import axios from "axios";
export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "  http://localhost:5001/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};
