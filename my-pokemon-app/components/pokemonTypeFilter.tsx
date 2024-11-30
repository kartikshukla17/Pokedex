import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
  darkMode: boolean;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ 
  availableTypes, 
  selectedTypes, 
  onTypeSelect,
  darkMode 
}) => {
  const handleTypeClick = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypeSelect(selectedTypes.filter((t) => t !== type));
    } else {
      onTypeSelect([...selectedTypes, type]);
    }
  };

  return (
      <div className="flex flex-wrap gap-2">
        {availableTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeClick(type)}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider
              transition-all duration-300 ease-in-out 
              ${selectedTypes.includes(type) 
                ? 'bg-purple-600 text-white ring-2 ring-purple-300 scale-105' 
                : `${darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            `}
          >
            {type}
          </button>
        ))}
      </div>
  );
};

export default PokemonTypeFilter;