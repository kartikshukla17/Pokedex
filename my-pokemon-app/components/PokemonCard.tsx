
import React, { useState, useEffect } from "react";

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  darkMode: boolean;
}

interface Ability {
  ability: {
    name: string;
  };
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
}

const RoyalPokemonCard: React.FC<PokemonCardProps> = ({ 
  id, name, types, sprite, darkMode 
}) => {
  const [flipped, setFlipped] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultSprite = "https://via.placeholder.com/150";

  const fetchPokemonDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      if (!response.ok) throw new Error(`Failed to fetch data for ${name}`);
      const data = await response.json();
      setPokemonDetails(data);
    } catch (err) {
      console.error("Failed to fetch Pokémon details:", err);
      setError("Could not fetch Pokémon details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (flipped && !pokemonDetails) {
      fetchPokemonDetails();
    }
  }, [flipped, pokemonDetails]);

  const cardClasses = darkMode 
    ? "bg-gray-800 border-gray-700 text-white" 
    : "bg-white border-gray-200 text-gray-800";

  return (
    <div 
      className={`
        relative w-64 h-96 perspective cursor-pointer 
        transform transition-all duration-300 hover:scale-105
        shadow-xl rounded-2xl 
        ${cardClasses}
      `}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`
          absolute w-full h-full transition-transform duration-500 
          transform-style-3d ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* Front Side */}
        <div className="
          absolute w-full h-full flex flex-col items-center justify-center 
          p-6 text-center backface-hidden
          bg-gradient-to-br from-purple-100 to-purple-200 
          dark:from-gray-700 dark:to-gray-800
        ">
          <div className="
            w-40 h-40 bg-white dark:bg-gray-700 
            rounded-full flex items-center justify-center 
            shadow-md mb-4 border-4 border-purple-300
          ">
            <img
              src={sprite || defaultSprite}
              alt={name}
              className="w-32 h-32 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-300 capitalize">
            {name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">#{id}</p>
          <div className="flex space-x-2 mt-2">
            {types.map((type) => (
              <span
                key={type}
                className="
                  bg-purple-200 dark:bg-gray-600 
                  text-purple-800 dark:text-purple-300
                  text-xs px-3 py-1 rounded-full uppercase
                "
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Back Side */}
        <div className="
          absolute w-full h-full backface-hidden transform rotate-y-180
          bg-gradient-to-br from-purple-200 to-purple-300
          dark:from-gray-800 dark:to-gray-900
          p-6 text-center flex flex-col justify-center
        ">
          {loading ? (
            <p className="text-purple-800 dark:text-white">Loading details...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : pokemonDetails ? (
            <>
              <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-200 capitalize mb-4">
                {pokemonDetails.name}
              </h2>
              <div className="space-y-2 text-purple-800 dark:text-gray-200">
                <p>Height: {pokemonDetails.height / 10} m</p>
                <p>Weight: {pokemonDetails.weight / 10} kg</p>
                <p>Base Experience: {pokemonDetails.base_experience}</p>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">Abilities</h3>
                  {pokemonDetails.abilities.map((ability) => (
                    <p 
                      key={ability.ability.name} 
                      className="text-sm capitalize"
                    >
                      {ability.ability.name.replace('-', ' ')}
                    </p>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-purple-800 dark:text-white">No details available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoyalPokemonCard;