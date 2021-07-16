import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../../styles/index";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../api/products";
import { changeState, setProducts } from "../../redux/actions/productActions";
import { TextField } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.allProducts.showButton);
  useEffect(() => {
    getAllProducts().then((res) => {
      setNewProducts(res.data);
      const newRows = res.data.map((item) => {
        return { id: item.id, priceEditable: false, entityEditable: false };
      });
      setRows(newRows);
    });
  }, []);

  const changeEditPrice = (id) => {
    let newRows = [...rows];
    let index = rows.findIndex((item) => item.id === id);
    let newRow = { ...newRows[index] };
    newRow.priceEditable = !newRow.priceEditable;
    newRows[index] = newRow;
    setRows(newRows);
  };
  const changeEditEntity = (id) => {
    let newRows = [...rows];
    let index = rows.findIndex((item) => item.id === id);
    let newRow = { ...newRows[index] };
    newRow.entityEditable = !newRow.entityEditable;
    newRows[index] = newRow;
    setRows(newRows);
  };
  const update = (e, id) => {
    dispatch(changeState());
    const values = e.target.value;
    let names = e.target.name;
    let arrays = [...newProducts];
    arrays.map((item, index) => {
      if (item.id === id) {
        item[names] = values;
      }
    });
    setNewProducts(arrays);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, newProducts?.length - page * rowsPerPage);
  return (
    <div>
      <Box component="div" className={classes.tableDiv}>
        <h1>مدیریت موجودی و قیمت ها</h1>
        {showButton && (
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<SaveAltIcon />}
          >
            ذخیره
          </Button>
        )}
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>نام کالا</TableCell>
              <TableCell>قیمت</TableCell>
              <TableCell>موجودی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newProducts
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.title}</TableCell>
                  {!rows[index]?.priceEditable ? (
                    <TableCell onClick={() => changeEditPrice(product.id)}>
                      {product.price}
                    </TableCell>
                  ) : (
                    <TableCell>
                      <TextField
                        name="price"
                        variant="outlined"
                        value={product.price}
                        onChange={(e) => update(e, product.id)}
                      />
                    </TableCell>
                  )}
                  {!rows[index]?.entityEditable ? (
                    <TableCell onClick={() => changeEditEntity(product.id)}>
                      {product.stock}
                    </TableCell>
                  ) : (
                    <TableCell>
                      <TextField
                        name="stock"
                        variant="outlined"
                        value={product.stock}
                        onChange={(e) => update(e, product.id)}
                      />
                    </TableCell>
                  )}
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
          count={newProducts?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
