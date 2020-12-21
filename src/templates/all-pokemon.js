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

export default ({ pageContext: { allPokemon } }) => (
  <Container maxW="x2" centerContent>
    <Text fontSize="4xl">Choose a Pokémon!</Text>
    <UnorderedList
      style={{
        padding: 0,
      }}
    >
      <Flex flexWrap="wrap" flexDirection="row">
        {allPokemon.map((pokemon) => (
          <ListItem
            key={pokemon.id}
            style={{
              listStyle: 'none',
            }}
          >
            <Box padding="6" boxShadow="lg" bg="white">
              <Link to={`/pokemon/${pokemon.name}`}>
                <Center>
                  <Image
                    boxSize="100px"
                    fallbackSrc="https://via.placeholder.com/100"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                </Center>
                <Text casing="capitalize" fontSize="2xl">
                  {pokemon.name}
                </Text>
              </Link>
            </Box>
          </ListItem>
        ))}
      </Flex>
    </UnorderedList>
    <Box
      color="gray.500"
      fontWeight="semibold"
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
      ml="2"
    >
      <br />
      <Link to="/">Back to Home</Link>
    </Box>
  </Container>
);
