import React from 'react';
import { useForm } from 'react-hook-form';

interface SearchInputProps {
  onSearchChange: (search: string) => void;
}

interface SearchFormValues {
  search: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  const { register, watch } = useForm<SearchFormValues>({
    defaultValues: { search: '' },
  });

  React.useEffect(() => {
    onSearchChange(watch('search'));
  }, [watch('search'), onSearchChange]);

  return (
    <input
      id="pokemon-search"
      type="text"
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
      placeholder="Search Pokémon"
      {...register('search')}
    />
  );
};

export default SearchInput;
