import { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import Locations from './components/Locations';
import { Flex } from '@chakra-ui/react';

function App() {
  const [input, setInput] = useState('');
  return (
    <Flex flexDirection="column" alignItems="flex-start" m="5">
      <Header />
      <InputField input={input} setInput={setInput} />
      <Locations input={input} />
    </Flex>
  );
}

export default App;
