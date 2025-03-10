import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemonService.ts';
import { useDebounce } from '../../hooks/useDebounce.ts';
import { Pokemon } from '../../services/types.ts';
import SearchInput from '../SearchInput/SearchInput.tsx';
import PokemonList from '../PokemonList/PokemonList.tsx';
import SelectedPokemons from '../SelectedPokemons/SelectedPokemons.tsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.tsx';
import TrainerForm from '../TrainerForm/TrainerForm.tsx';

const Select: React.FC = () => {
  const [isTrainerValid, setIsTrainerValid] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string>('');

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      setFilteredPokemons(data);
    };
    getPokemons();
  }, []);

  const searchTerm = debouncedSearch;

  useEffect(() => {
    const allPokemons = pokemons;

    if (searchTerm) {
      const filtered = allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemons(filtered);
    } else {
      setFilteredPokemons(allPokemons);
    }
  }, [searchTerm, pokemons]);

  const handleSelect = (pokemon: Pokemon) => {
    if (selectedPokemons.some(p => p.name === pokemon.name)) {
      setError('This Pokémon is already selected');
      return;
    }

    if (selectedPokemons.length >= 4) {
      setError('You can only select 4 Pokémon');
      return;
    }

    setSelectedPokemons(prev => [...prev, pokemon]);
    setError('');
  };

  const handleDeselect = (pokemon: Pokemon) => {
    setSelectedPokemons(prev => prev.filter(p => p.name !== pokemon.name));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <TrainerForm onValidationChange={setIsTrainerValid} />
      <SearchInput onSearchChange={setSearch} />
      <PokemonList
        pokemons={filteredPokemons}
        handleSelect={
          isTrainerValid
            ? handleSelect
            : () => setError('Fill in valid trainer info first.')
        }
      />
      {error && <ErrorMessage message={error} />}
      <SelectedPokemons
        selectedPokemons={selectedPokemons}
        handleDeselect={handleDeselect}
      />
    </div>
  );
};

export default Select;
