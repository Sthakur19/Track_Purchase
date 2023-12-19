import React from "react";

import "./Pagination.css";

const Pagination = ({
    totalProducts,
    ProductsPerPage,
    setCurrentPage,
    currentPage,
    setProductsPerPage,
    }) => {

    const totalPages = Math.ceil(totalProducts / ProductsPerPage);
    const startRange = (currentPage - 1) * ProductsPerPage + 1;
    const endRange = Math.min(currentPage * ProductsPerPage, totalProducts);
    

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalProducts / ProductsPerPage); i++) {
        pages.push(i);
    }

    const handleProductsPerPageChange = (e) => {
      setProductsPerPage(parseInt(e.target.value));
      setCurrentPage(1); // Reset currentPage when changing ProductsPerPage
    };

    const handlePrevClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < pages.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  

    return (
        <div className='pagination'>
            <div className="text-sm">
              Row per page{" "}
              <select
                value={ProductsPerPage}
                onChange={handleProductsPerPageChange}
                className="mr-2 focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="text-sm mr-4 ml-4">
              {startRange}-{endRange} of {totalProducts}
            </div>
            <button onClick={handlePrevClick} disabled={currentPage === 1}>
              &lt; 
            </button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
            <button onClick={handleNextClick} disabled={currentPage === pages.length}>
               &gt;
            </button>
        </div>
    );
};

export default Pagination;