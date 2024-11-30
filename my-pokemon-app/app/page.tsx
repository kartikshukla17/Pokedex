import React from 'react';
import PokedexGrid from '@/components/pokedexGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-center text-black">Pokémon Explorer</h1>
      <PokedexGrid /> {/* Render the Pokémon grid with filters */}
    </div>
  );
}
