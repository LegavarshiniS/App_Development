import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'; 
import IconButton from '@mui/material/IconButton';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {

    console.log('Search query:', searchQuery);
  };

  return (
    <>
      <style>
        {`
          .search-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;
            margin-left:260px;
            margin-top:20px;
          }

          .search-input {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 20px;
            width: 290px;
            margin-right: 10px;
            outline: none;
          }

          .search-icon {
            color: #333;
            cursor: pointer;
            background-color:white;
          }

          .search-icon:hover {
            color: #F67153 ;
          }
        `}
      </style>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search the store"
        />
        <IconButton className="search-icon" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </div>
    </>
  );
};

export default SearchBar;
