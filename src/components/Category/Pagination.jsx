import React from "react";
import PaginationList from "./PaginationList";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationControl = (number) => {
    paginate(number);
  };

  return (
    <div className="center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <PaginationList
            pageNumbers={pageNumbers}
            key={number}
            onClick={() => paginationControl(number)}
            number={number}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
