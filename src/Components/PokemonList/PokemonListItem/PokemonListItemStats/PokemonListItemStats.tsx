import React from "react";

import {
  StyledPokemonListItemStats,
  StyledPokemonListItemStatsLi,
} from "./PokemonListItemStats.styled";

interface PokemonListItemStatsInterface {
  pokemonData: {
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
  };
}

export const PokemonListItemStats: React.FC<PokemonListItemStatsInterface> = ({
  pokemonData,
}) => {
  const { stats } = pokemonData;
  return (
    <StyledPokemonListItemStats className="stats">
      <ul className="stats__list">
        {stats.map((stat, id) => (
          <StyledPokemonListItemStatsLi
            key={`${stat.base_stat} ${id}`}
            base_stat={stat.base_stat}
            className="stats__item"
          >
            {stat.stat.name.toUpperCase()} <span></span>
          </StyledPokemonListItemStatsLi>
        ))}
      </ul>
    </StyledPokemonListItemStats>
  );
};
