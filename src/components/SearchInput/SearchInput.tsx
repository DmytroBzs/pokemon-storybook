import React from 'react';

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ search, setSearch }) => {
  return (
    <input
      id="pokemon-search"
      type="text"
      className="mt-1 block w-full color-red-800 px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Search Pokémon"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
