import React from "react";
import StockAndPriceTable from "../components/StockAndPrice/StockAndPriceTable";
import { useStyles } from "../styles";
const StockAndPrice = () => {
  const classes = useStyles();
  return (
    <>
      <StockAndPriceTable />
    </>
  );
};
export default StockAndPrice;
