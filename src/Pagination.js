import React from "react";
const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      {pageNumber.map((number) => (
        <li key={number}>
          <a href="!#" onClick={() => paginate(number)}>
            Page{number}
          </a>
        </li>
      ))}
    </nav>
  );
};
export default Pagination;
