import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { getAllProducts } from "../api/products";
import { setProducts, getProducts } from "../redux/actions/productActions";
const AdminPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  // useEffect(() => {
  //   getAllProducts().then((res) => {
  //     console.log(res.data);
  //     dispatch(setProducts(res.data));
  //   });
  // }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className={classes.mainDashboard}>
      <main className={classes.content}>
        <div className={classes.subContent} />
        <h1>PM</h1>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph></Typography> */}
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <h1>{product.id}</h1>
              <h1>{product.title}</h1>
              <h1>{product.category}</h1>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default AdminPage;
