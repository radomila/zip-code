import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export interface AlertBoxProps {
  status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
  title?: string;
  desc: string;
}

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
