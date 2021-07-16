import { classExpression } from "@babel/types";
import { TableCell, TextField, RootRef } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { useStyles } from "../../styles";
const RenderedCell = ({ number, onKeyPress }) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const domRef = useRef();
  const toggleEdit = () => {
    setEdit(true);
    // domRef.current.click();
  };
  return (
    <>
      {edit ? (
        <TableCell>
          <RootRef rootRef={domRef}>
            <TextField
              variant="outlined"
              value={number}
              InputProps={{
                className: classes.tableInput,
              }}
              // onChange={updateNumbers}
              onKeyPress={onKeyPress}
            />{" "}
          </RootRef>
        </TableCell>
      ) : (
        <TableCell onDoubleClick={() => toggleEdit()}>{number}</TableCell>
      )}
    </>
  );
};

export default RenderedCell;
