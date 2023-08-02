// usePagination.js
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const usePagination = (initialPage, itemsPerPage) => {
  const location = useLocation();
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page') || '1', 10);
    setCurrentPage(page);
  }, [location]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', currentPage);
    history.push({ search: searchParams.toString() });
  }, [currentPage, history, location]);

  return {
    currentPage,
    handlePageChange,
  };
};

export default usePagination;
