import { Input, FormControl, FormHelperText } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { isValid } from '../functions/isValid';
import { InputProps } from '../types/code';

interface Props {
  input: InputProps;
  setInput: (value: InputProps) => void;
}

function InputField({ input, setInput }: Props) {
  const [localInput, setLocalInput] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (isValid(event.target.value)) setInput({ zipCode: event.target.value });
    setLocalInput(event.target.value);
  };

  return (
    <>
      <FormControl isRequired>
        <Input
          placeholder="Please enter a zip code"
          htmlSize={30}
          width="auto"
          size="lg"
          value={localInput}
          onChange={handleInput}
        />

        {isValid(input.zipCode) && (
          <FormHelperText>Your zip code is invalid - 999 99</FormHelperText>
        )}
      </FormControl>
    </>
  );
}

export default InputField;
