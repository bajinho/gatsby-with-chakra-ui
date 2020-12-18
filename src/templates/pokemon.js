import React from 'react';
import {
  Box,
  Text,
  Container,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { Link } from 'gatsby';

export default ({ pageContext: { pokemon } }) => (
  <Container>
    <Text>{pokemon.name}</Text>
    <Image
      boxSize="300px"
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
    />
    <Box padding="6" boxShadow="lg" bg="white">
      <Text>Stats</Text>
      <UnorderedList>
        {pokemon.stats.map((stat) => (
          <ListItem
            key={stat.stat.name}
            style={{
              padding: 0,
              display: 'flex',
            }}
          >
            <Text>{stat.stat.name}:</Text>
            <Text>{stat.base_stat}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
    <Box padding="6" boxShadow="lg" bg="white">
      <Text>Abilities</Text>
      <UnorderedList>
        {pokemon.abilities.map((ability) => (
          <ListItem key={ability.name}>
            <Link to={`/pokemon/${pokemon.name}/ability/${ability.name}`}>
              {ability.name}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
    <Link to="/pokemon">Back to all Pokémon</Link>
  </Container>
);
