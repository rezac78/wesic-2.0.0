import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    query
  };

  return (
    <div className="flex border rounded-full overflow-hidden ">
      <input
        type="text"
        placeholder="Search..."
        className="p-1 flex-grow outline-none text-center"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

    </div>
  );
}

export default Search;
