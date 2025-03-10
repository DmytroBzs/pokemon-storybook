import axios from 'axios';

export const fetchPokemons = async () => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=150'
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching Pokemons', error);
    return [];
  }
};
