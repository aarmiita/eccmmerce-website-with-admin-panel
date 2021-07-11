import React from "react";
import { Button, TextField, SvgIcon } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuItem from "@material-ui/core/MenuItem";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const AddProducts = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <>
      <form>
        <div>
          <h4>تصویر کالا</h4>
          <TextField
            variant="outlined"
            type="file"
            id="fileUploadButton"
            value=""
          />
          <label htmlFor={"fileUploadButton"}>
            <Button
              color="secondary"
              variant="contained"
              component="span"
              startIcon={
                <SvgIcon fontSize="small">
                  <CloudUploadIcon />
                </SvgIcon>
              }
            >
              Browse
            </Button>
          </label>
        </div>
        <div>
          <h4>نام کالا : </h4>
          <TextField
            variant="outlined"
            fullWidth
            id="name"
            name="name"
            autoComplete="name"
            autoFocus
            value=""
          />
        </div>
        <div>
          <h4>دسته بندی : </h4>
          <TextField
            variant="outlined"
            fullWidth
            id="standard-select-currency"
            select
            value={currency}
            helperText="لطفا دسته بندی مورد نظر را انتخاب کنید"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <h4>توضیحات : </h4>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="MultiLine with rows: 2 and rowsMax: 4"
            multiline
            rows={4}
            rowsMax={5}
          />
        </div>
      </form>
    </>
  );
};

export default AddProducts;
