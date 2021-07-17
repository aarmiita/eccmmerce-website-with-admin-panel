import axios from "axios";
export const getAllCart = async () => {
  let res = await axios({
    method: "get",
    url: "  http://localhost:5001/cart",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};
