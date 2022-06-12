import { Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Heading
        as={'h1'}
        fontSize={{ base: '2xl', sm: '3xl', md: '5xl', lg: '7xl' }}
        textAlign='center'
      >
        Presentando Studios Ghibli
      </Heading>
    </>
  );
};

export default Home;
