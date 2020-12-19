import React from 'react';
import { Box, Text, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';

function IndexPage() {
  return (
    <Flex>
      <Box p="2">
        <Heading size="md">
          <Link to="/pokemon">
            <Text>My Pokémon</Text>
          </Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Box as="button" borderRadius="md" bg="tomato" px={4} h={10}>
          <Link to="/pokemon">
            <Text>My Pokémon</Text>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default IndexPage;
