import React from 'react';
import { Pokemon } from '../../services/types.ts';

interface PokemonListProps {
  pokemons: Pokemon[];
  handleSelect: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  handleSelect,
}) => {
  return (
    <ul className="mt-2 max-h-60 overflow-y-auto border border-gray-300 rounded-md">
      {pokemons.map(pokemon => {
        const id = pokemon.url.split('/').filter(Boolean).pop();
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
          <li
            key={pokemon.name}
            className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleSelect(pokemon)}
          >
            <img src={imageUrl} alt={pokemon.name} className="w-10 h-10" />
            <span className="capitalize">{pokemon.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
