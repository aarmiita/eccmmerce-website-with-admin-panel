import React from "react";
import { useStyles } from "../styles";
import StockAndPriceTable from "../components/StockAndPrice/StockAndPriceTable";
const StockAndPrice = () => {
  const classes = useStyles();

  return (
    // <div className={classes.mainDashboard}>
    //   <main className={classes.content}>
    //     <div className={classes.subContent} />
    <>
      <h1>مدیریت موجودی و قیمت ها</h1>
      <StockAndPriceTable />
    </>
    // {/* //   </main> */}
    // {/* // </div> */}
  );
};
export default StockAndPrice;
