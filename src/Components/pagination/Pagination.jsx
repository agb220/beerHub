import React from "react";

import { useSelector } from "react-redux";

import ReactPaginate from "react-paginate";

import pagination from "./pagination.css";

function Pagination({ onChangePage, currentPage }) {
  // const { products } = useSelector(({ productsReducer }) => {
  //   return {
  //     products: productsReducer.items,
  //   };
  // });

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % products.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-block"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={10}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
