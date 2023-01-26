import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ReactPaginate from "react-paginate";

import { RootState } from "../../redux/store";

import "./pagination.css";

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  onChangePage,
  currentPage,
}) => {
  const { products } = useSelector((state: RootState) => state.productsSlice);
  const [pageCount, setPageCount] = useState(0);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % products.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  useEffect(() => {
    //console.log("products", products);
    setPageCount(Math.ceil(products.length / 2));
  }, [products]);

  return (
    <div className="pagination">
      <ReactPaginate
        className="pagination-block"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        marginPagesDisplayed={4}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
    </div>
  );
};

export default Pagination;
