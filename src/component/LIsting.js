import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

const Listing = () => {
  const [data, setData] = useState([]);
  const itemsPerPage = 5;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const currentPageData = parseInt(urlSearchParams.get("page") || 1, 10);
  const [currentPage, setCurrentPage] = useState(currentPageData);

  // Search and Filter state variables
  const [searchQuery, setSearchQuery] = useState(urlSearchParams.get("search") || "");
  const [filterOption, setFilterOption] = useState(urlSearchParams.get("filter") || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}&q=${searchQuery}&filter=${filterOption}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, searchQuery, filterOption]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    urlSearchParams.set("page", newPage);
    updateUrl();
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const updateUrl = () => {
    urlSearchParams.set("search", searchQuery);
    urlSearchParams.set("filter", filterOption);
    const newUrl = `${window.location.pathname}?${urlSearchParams.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return (
    <div>
      {/* Search Input */}
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search..." />
      {/* Filter Select */}
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        {/* Add more filter options as needed */}
      </select>

      {data.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <a href="#" className="btn btn-primary">
              Detail Post
            </a>
          </div>
        </div>
      ))}

      <Pagination
        count={10} // Assuming 10 pages in total, change this value accordingly
        color="primary"
        size="large"
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Listing;
