"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import PokemonTypeFilter from "./pokemonTypeFilter";
import { Search, Moon, Sun } from "lucide-react";

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokedexGrid: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0");
      const results = response.data.results;

      const detailedData: Pokemon[] = await Promise.all(
        results.map(async (pokemon: { name: string; url: string }) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return {
            id: pokemonDetails.data.id,
            name: pokemonDetails.data.name,
            types: pokemonDetails.data.types.map((t: PokemonType) => t.type.name),
            sprite: pokemonDetails.data.sprites.front_default,
          };
        })
      );

      const typesResponse = await axios.get("https://pokeapi.co/api/v2/type");
      const typesList = typesResponse.data.results.map((type: { name: string }) => type.name);

      setAvailableTypes(typesList);
      setPokemonData(detailedData);
      setFilteredPokemonData(detailedData);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let result = pokemonData;

    if (selectedTypes.length > 0) {
      result = result.filter((pokemon) =>
        selectedTypes.some((type) => pokemon.types.includes(type))
      );
    }

    if (searchTerm) {
      result = result.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPokemonData(result);
  }, [selectedTypes, searchTerm, pokemonData]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  // Toggle dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl dark:text-white">Loading  Pokédex...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-500">
            Pokédex
          </h1> 
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
            </button>
          </div>
        </div>

        <div className="mb-6 flex space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" />
          </div>

          <PokemonTypeFilter
            availableTypes={availableTypes}
            selectedTypes={selectedTypes}
            onTypeSelect={(types) => setSelectedTypes(types)}
            darkMode={darkMode}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {filteredPokemonData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
              sprite={pokemon.sprite}
              darkMode={darkMode}
            />
          ))}
        </div>

        {filteredPokemonData.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No Pokémon found matching the search and filter criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default PokedexGrid;
