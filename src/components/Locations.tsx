import {
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import useCode from '../Hooks/useCode';
import Spinner from './Spinner';
import AlertBox from './AlertBox';
import { InputProps } from '../types/code';
import Pagination from './Pagination';
import { useState } from 'react';

interface Props {
  input: InputProps;
}

function Locations({ input }: Props) {
  const { code, loading } = useCode(input.zipCode);
  const [currentPage, setCurrentPage] = useState(1);

  const codesPerPage = 3;
  const finalIndex = currentPage * codesPerPage;
  const startingIndex = finalIndex - codesPerPage;

  const zipCodes = code?.places.slice(startingIndex, finalIndex);

  if (!code) {
    return (
      <AlertBox
        status="info"
        desc="In order to show the list of places, please enter the zip code."
      />
    );
  }

  if (code?.places?.length > 0) {
    return (
      <>
        <Card width="60rem">
          <CardHeader>
            <Heading size="md">List of places</Heading>
          </CardHeader>
          <CardBody>
            {!loading ? (
              <Stack divider={<StackDivider />} spacing="4">
                {zipCodes?.map((place) => {
                  return (
                    <Box>
                      <Text pt="2" fontSize="lg">
                        {place['place name']}
                      </Text>
                    </Box>
                  );
                })}
              </Stack>
            ) : (
              <Spinner />
            )}
          </CardBody>
        </Card>
        <Pagination
          totalItems={code?.places?.length}
          itemsPerPage={codesPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else {
    return (
      <AlertBox
        status="error"
        title="No places found."
        desc="We are sorry, but for this zip code wasn't found any places."
      />
    );
  }
}

export default Locations;
