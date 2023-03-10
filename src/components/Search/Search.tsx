/* eslint-disable max-len */
import React from 'react';
import SearchIcon from '../../Icons/SearchIcon';

const Search = () => {
  return (
    <>
      <div className="relative flex-1 mx-4">
        <div className="absolute top-2 left-4 pointer-events-none">
          <SearchIcon />
        </div>

        <input
          className="w-full py-2 pl-12 rounded-3xl bg-bg-search text-white placeholder:text-gray"
          placeholder="Я ищу.."
        />
      </div>
    </>
  );
};

export default Search;
