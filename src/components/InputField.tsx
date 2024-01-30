import {
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { isValid } from '../functions/isValid';

function InputField({
  input,
  setInput,
}: {
  input: string;
  setInput: (value: string) => void;
}) {
  const [localInput, setLocalInput] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (isValid(event.target.value)) setInput(event.target.value);
    setLocalInput(event.target.value);
  };

  return (
    <>
      <FormControl isRequired isInvalid={isValid(input)}>
        <Input
          placeholder="Please enter a zip code"
          htmlSize={30}
          width="auto"
          size="lg"
          value={localInput}
          onChange={handleInput}
        />
        {isValid(input) ? (
          <FormHelperText>Enter the zip code</FormHelperText>
        ) : (
          <FormErrorMessage>Zip code is invalid</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}

export default InputField;
