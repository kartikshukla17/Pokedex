import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[]; // List of all possible Pokémon types (e.g., "Fire", "Water", etc.)
  selectedTypes: string[]; // List of currently selected types (user's filter preferences)
  onTypeSelect: (types: string[]) => void; // Callback function to update the selected types in the parent component
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ availableTypes, selectedTypes, onTypeSelect }) => {
  // Function to handle type button clicks
  const handleTypeClick = (type: string) => {
    if (selectedTypes.includes(type)) {
      // If the type is already selected, remove it from the selectedTypes list
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      // If the type is not selected, add it to the selectedTypes list
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {/* Loop through availableTypes to create a button for each type */}
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => handleTypeClick(type)}
          className={`px-4 py-2 rounded-lg ${
            selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
