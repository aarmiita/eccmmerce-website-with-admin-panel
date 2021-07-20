import React, { useState, useEffect } from "react";
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
import { getProducts, getAProduct } from "../redux/actions/productActions";
import { SetselectedProduct } from "../redux/actions/productActions";
import { useStyles } from "../styles/index";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function SimpleTable() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const handleEdit = (product) => {
    dispatch(SetselectedProduct(product));
    handleOpen();
  };
  const handleDelete = (product) => {
    dispatch(SetselectedProduct(product));
    handleOpenDelete();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // useEffect(() => {
  //   getAllProducts().then((res) => {
  //     console.log(res.data);
  //     dispatch(setProducts(res.data));
  //   });
  // }, []);
  useEffect(() => {
    // dispatch(setProducts());
    dispatch(getProducts());
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products?.length - page * rowsPerPage);
  return (
    <TableContainer component={Paper} className={classes.TableContainer}>
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
                    onClick={() => handleEdit(product)}
                  >
                    ویرایش
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.tableBtn}
                    onClick={() => handleDelete(product)}
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
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <EditModal open={open} handleClose={handleClose} />
      <DeleteModal
        open={openDelete}
        handleClose={handleCloseDelete}
        closeModalDelete={handleCloseDelete}
      />
    </TableContainer>
  );
}
