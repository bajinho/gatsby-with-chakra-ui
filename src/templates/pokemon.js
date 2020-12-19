import React from 'react';
import {
  Box,
  Text,
  Container,
  UnorderedList,
  ListItem,
  Image,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Link } from 'gatsby';

export default ({ pageContext: { pokemon } }) => (
  <Container>
    <Box padding="6" boxShadow="lg" bg="white">
      <Text casing="capitalize" fontSize="4xl">
        {pokemon.name}
      </Text>
      <Center>
        <Image
          boxSize="300px"
          fallbackSrc="https://via.placeholder.com/300"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </Center>
      <Text fontSize="2xl">Stats</Text>
      <UnorderedList>
        {pokemon.stats.map((stat) => (
          <ListItem
            key={stat.stat.name}
            style={{
              padding: 0,
              listStyle: 'none',
            }}
          >
            <Flex justifyContent="space-between">
              <Text>{stat.stat.name}:</Text>
              <Text>{stat.base_stat}</Text>
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
    <Box padding="6" boxShadow="lg" bg="white">
      <Text fontSize="2xl">Abilities</Text>
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
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
    >
      <br />
      <Link to="/pokemon">Back to all Pokémon</Link>
    </Box>
  </Container>
);
