export const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      abilities {
        ability {
          name
          id
          effect_entries {
            effect
          }
        }
      }
      moves {
        move {
          name
          id
          type {
            name
          }
          power
          accuracy
          effect_entries {
            effect
          }
        }
      }
      sprites {
        other {
          dream_world {
            front_default
          }
        }
      }
    }
  }
`;
