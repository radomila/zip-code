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

function Locations({ input }: { input: string }) {
  const { code, loading } = useCode(input);

  return (
    <>
      {code ? (
        code?.places?.length > 0 ? (
          <Card width="60rem">
            <CardHeader>
              <Heading size="md">List of places</Heading>
            </CardHeader>
            <CardBody>
              {!loading ? (
                <Stack divider={<StackDivider />} spacing="4">
                  {code?.places?.map((place) => {
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
        ) : (
          <Text fontSize="xl">
            We are sorry, but for this zip code wasn't found any places.
          </Text>
        )
      ) : (
        <Text fontSize="xl">
          In order to show the list of places, please enter the zip code.
        </Text>
      )}
    </>
  );
}

export default Locations;
