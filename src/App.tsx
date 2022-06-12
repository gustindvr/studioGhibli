import { Container } from '@chakra-ui/react';
import List from './components/atoms/List';

import Navbar from './components/organisms/Navbar';

function App() {
  return (
    <Container maxW={{ base: 'xl', md: 'lg', lg: '4xl' }}>
      <Navbar />
      <List />
    </Container>
  );
}

export default App;
