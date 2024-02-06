import { Button, Flex } from '@chakra-ui/react';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (value: number) => void;
}

function Pagination({ totalItems, itemsPerPage, setCurrentPage }: Props) {
  const numPages = [];

  console.log(totalItems);

  for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
    numPages.push(i + 1);
  }

  return (
    <Flex>
      {numPages.map((pageNum) => {
        return (
          <Button
            colorScheme="teal"
            size="md"
            mr="4px"
            onClick={() => setCurrentPage(pageNum)}
          >
            {pageNum}
          </Button>
        );
      })}
    </Flex>
  );
}

export default Pagination;
