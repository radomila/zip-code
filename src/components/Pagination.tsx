import { Button, Flex, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: Props) {
  const pages = [];
  const numPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 0; i < numPages; i++) {
    pages.push(i + 1);
  }

  return (
    <Flex>
      <IconButton
        aria-label="previous"
        icon={<ChevronLeftIcon />}
        isDisabled={currentPage === 1 ? true : false}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {pages.map((pageNum) => {
        return (
          <>
            <Button
              colorScheme="teal"
              size="md"
              mr="4px"
              ml="4px"
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </Button>
          </>
        );
      })}
      <IconButton
        aria-label="next"
        icon={<ChevronRightIcon />}
        isDisabled={currentPage === numPages ? true : false}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </Flex>
  );
}

export default Pagination;
