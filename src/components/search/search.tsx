import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  return (
    <div className="flex border rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 flex-grow outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="px-4 bg-blue-500 text-white">
        Search
      </button>
    </div>
  );
}

export default Search;
