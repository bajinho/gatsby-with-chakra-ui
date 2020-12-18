import React from 'react';
import { Box, Text, Container, Image } from '@chakra-ui/react';
import { Link } from 'gatsby';

const getName = (ability) =>
  ability.names.find(({ language }) => language.name === 'en').name;

export default ({ pageContext: { pokemon, ability } }) => (
  <Container>
    <Box padding="6" boxShadow="lg" bg="white">
      <Text>
        {pokemon.name}
        ’s {getName(ability)} ability
      </Text>
      <Image
        boxSize="300px"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <Text>{ability.effect_entries[0].effect}</Text>
      <Link to={`/pokemon/${pokemon.name}`}>Back to {pokemon.name}</Link>
    </Box>
  </Container>
);
