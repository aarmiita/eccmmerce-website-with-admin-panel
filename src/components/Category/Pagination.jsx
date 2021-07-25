import { ForumTwoTone } from "@material-ui/icons";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationControl = (number) => {
    paginate(number);
  };

  return (
    <div class="center">
      <ul class="pagination">
        {pageNumbers.map((number) => (
          <li
            className="active"
            key={number}
            onClick={() => {
              paginationControl(number);
            }}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
