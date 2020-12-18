import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

function IndexPage() {
  return (
    <Box p={8}>
      <Link to="/pokemon">
        <Text>My Pokémon</Text>
      </Link>
    </Box>
  );
}

export default IndexPage;
