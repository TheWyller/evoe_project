import React from "react";
import { Arrow, PageNumber, PaginationContainer } from "./styled";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <PaginationContainer>
      {currentPage > 0 && (
        <Arrow onClick={() => onPageChange(currentPage - 1)}>&lt;</Arrow>
      )}

      {pageNumbers.map((pageNumber) => (
        <PageNumber
          key={pageNumber}
          active={pageNumber - 1 === currentPage}
          onClick={() => onPageChange(pageNumber - 1)}
        >
          {pageNumber}
        </PageNumber>
      ))}

      {currentPage < totalPages - 1 && (
        <Arrow onClick={() => onPageChange(currentPage + 1)}>&gt;</Arrow>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
