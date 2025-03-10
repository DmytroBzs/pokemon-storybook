import React from 'react';
import { Pokemon } from '../../services/types.ts';

interface SelectedPokemonsProps {
  selectedPokemons?: Pokemon[];
  handleDeselect: (pokemon: Pokemon) => void;
}

const SelectedPokemons: React.FC<SelectedPokemonsProps> = ({
  selectedPokemons = [],
  handleDeselect,
}) => {
  return (
    <div className="mt-4">
      <strong className="block text-lg font-semibold text-gray-800">
        Selected Pokémon:
      </strong>

      {selectedPokemons.length === 0 ? (
        <p className="text-gray-500 text-sm">No Pokémon selected.</p>
      ) : (
        <ul className="mt-3 flex flex-wrap gap-3">
          {selectedPokemons.map(pokemon => {
            const id = pokemon.url.split('/').filter(Boolean).pop();
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            return (
              <li
                key={pokemon.name}
                className="flex  items-center gap-2 px-3 py-2 border w-80 border-gray-300 rounded-lg shadow-md transition hover:shadow-lg justify-center"
              >
                <img src={imageUrl} alt={pokemon.name} className="w-10 h-10" />
                <span className="capitalize font-medium">{pokemon.name}</span>
                <button
                  onClick={() => handleDeselect(pokemon)}
                  className="text-red-500 hover:text-red-700 text-lg font-bold ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectedPokemons;
