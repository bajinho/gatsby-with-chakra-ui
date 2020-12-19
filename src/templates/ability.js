import React from 'react';
import { Box, Text, Container, Image, Center } from '@chakra-ui/react';
import { Link } from 'gatsby';

const getName = (ability) =>
  ability.names.find(({ language }) => language.name === 'en').name;

export default ({ pageContext: { pokemon, ability } }) => (
  <Container>
    <Box padding="6" boxShadow="lg" bg="white">
      <Text casing="capitalize" fontSize="4xl">
        {pokemon.name}
        ’s {getName(ability)} ability
      </Text>
      <Center>
        <Image
          boxSize="300px"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </Center>
      <Text>{ability.effect_entries[0].effect}</Text>
    </Box>
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
    >
      <br />
      <Link to={`/pokemon/${pokemon.name}`}>Back to {pokemon.name}</Link>
    </Box>
  </Container>
);
