import React, { useState } from "react";

const PaginationList = ({ number, onClick }) => {
  const [isActive, setIsActive] = useState("");

  const handleClick = (number) => {
    onClick(number);
  };

  return (
    <li className="active" onClick={() => handleClick(number)}>
      {number}
    </li>
  );
};

export default PaginationList;
