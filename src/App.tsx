import { useState } from 'react';
//import Header from './components/Header';
import InputField from './components/InputField';
import Locations from './components/Locations';
import { InputProps } from './types/code';
import { Flex } from '@chakra-ui/react';

function App() {
  const [input, setInput] = useState<InputProps>({ zipCode: '' });
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        m="5"
      >
        {/* <Header /> */}
        <InputField input={input} setInput={setInput} />
      </Flex>
      <Locations input={input} />
    </Flex>
  );
}

export default App;
