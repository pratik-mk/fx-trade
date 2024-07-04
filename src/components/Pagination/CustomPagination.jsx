import React, { useState } from 'react';
import { Pagination, PaginationItem, Button } from '@mui/material';
import './style.css'; 
const CustomPagination = ({ count }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleBack = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < count) {
      setPage(page + 1);
    }
  };

  const renderPaginationItem = (item) => {
    const { type, ...rest } = item;

    switch (type) {
      case 'page':
        return <PaginationItem {...rest} className="custom-pagination-item" component="li" />;
      case 'previous':
        return null; 
      case 'next':
        return null; 
      default:
        return null;
    }
  };

  return (
    <div className="custom-pagination-root">
      <Button variant="outlined" className="custom-pagination-button" onClick={handleBack}>
        Back
      </Button>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        renderItem={(item) => renderPaginationItem(item)}
        className="custom-pagination-ul"
        variant="outlined"
         shape="rounded"
      />
      <Button variant="outlined" className="custom-pagination-button" onClick={handleNext}>
        Next 
      </Button>
    </div>
  );
};

export default CustomPagination;
