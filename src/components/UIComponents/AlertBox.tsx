import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { AlertBoxProps } from '../../types/code';

function AlertBox({ status, title, desc }: AlertBoxProps) {
  return (
    <Alert status={status} width="40rem">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{desc}</AlertDescription>
    </Alert>
  );
}

export default AlertBox;
