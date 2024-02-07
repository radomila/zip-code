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
  const [localValue, setLocalValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (isValid(value)) setInput({ zipCode: value });
    setLocalValue(value);
  };

  const isError = !isValid(localValue) && localValue !== '';

  return (
    <>
      <FormControl isRequired isInvalid={isError}>
        <Input
          placeholder="Please enter a zip code"
          htmlSize={30}
          width="auto"
          size="lg"
          value={localValue}
          onChange={handleInput}
        />

        {isError ? (
          <FormErrorMessage>
            Your input is invalid, right format is e.g.: 384 71
          </FormErrorMessage>
        ) : (
          <FormHelperText>
            Enter a zip code in a following format, e.g.: 384 73
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}

export default InputField;
