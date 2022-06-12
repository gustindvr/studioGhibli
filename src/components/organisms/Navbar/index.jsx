import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Films from '../../atoms/List';
import Home from '../../Pages';

const Navbar = () => {
  return (
    <Router>
      <Flex flexFlow='row wrap' justifyContent='left' gap={5} p='1rem'>
        <Link to='/'>Home</Link>

        <Link to='/films'>Films</Link>

        <Link to='/users'>Users</Link>
      </Flex>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/films' exact element={<Films />}></Route>
      </Routes>
    </Router>
  );
};

export default Navbar;
