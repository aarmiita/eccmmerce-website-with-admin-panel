import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, getProducts } from "../redux/actions/productActions";
import { useStyles } from "../styles/index";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread2", 356, 16.0, 49, 3.9),
  createData("Gingerbread3", 356, 16.0, 49, 3.9),
  createData("Gingerbread4", 356, 16.0, 49, 3.9),
  createData("Gingerbread5", 356, 16.0, 49, 3.9),
  createData("Gingerbread6", 356, 16.0, 49, 3.9),
  createData("Gingerbread7", 356, 16.0, 49, 3.9),
  createData("Gingerbread8", 356, 16.0, 49, 3.9),
  createData("Gingerbread9", 356, 16.0, 49, 3.9),
  createData("Gingerbread10", 356, 16.0, 49, 3.9),
  createData("Gingerbread11", 356, 16.0, 49, 3.9),
  createData("Gingerbread12", 356, 16.0, 49, 3.9),
  createData("Gingerbread13", 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
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
    dispatch(setProducts());
    dispatch(getProducts());
  }, []);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>تصویر</TableCell>
            <TableCell>نام کالا</TableCell>
            <TableCell>دسته بندی</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={product.image}
                    alt="picture"
                    className={classes.tableImage}
                  />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.tableBtn}
                  >
                    ویرایش
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.tableBtn}
                  >
                    حذف
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
