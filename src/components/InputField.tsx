import {
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { isValid } from '../functions/isValid';
import { InputProps } from '../types/code';

interface Props {
  setInput: (value: InputProps) => void;
}

function InputField({ setInput }: Props) {
  const [localInput, setLocalInput] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (isValid(event.target.value)) setInput({ zipCode: event.target.value });
    setLocalInput(event.target.value);
  };

  const isError = !isValid(localInput) && localInput !== '';

  return (
    <>
      <FormControl isRequired isInvalid={isError}>
        <Input
          placeholder="Please enter a zip code"
          htmlSize={30}
          width="auto"
          size="lg"
          value={localInput}
          onChange={handleInput}
        />

        {isError ? (
          <FormErrorMessage>
            Your input is invalid, right format is e.g.: 384 71
          </FormErrorMessage>
        ) : (
          <FormHelperText>
            Enter a zip code in a following format, e.g. 384 73
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}

export default InputField;
