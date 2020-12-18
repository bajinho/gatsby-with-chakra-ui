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

export default ({ pageContext: { allPokemon } }) => (
  <Container>
    <Text>Choose a Pokémon!</Text>
    <UnorderedList
      style={{
        padding: 0,
      }}
    >
      {allPokemon.map((pokemon) => (
        <ListItem
          key={pokemon.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block',
          }}
        >
          <Box padding="6" boxShadow="lg" bg="white">
            <Link to={`/pokemon/${pokemon.name}`}>
              <Image
                boxSize="100px"
                fallbackSrc="https://via.placeholder.com/150"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <Text>{pokemon.name}</Text>
            </Link>
          </Box>
        </ListItem>
      ))}
    </UnorderedList>
    <Link to="/">Back to Home</Link>
  </Container>
);
