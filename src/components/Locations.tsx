import { Box } from '@chakra-ui/react';
import useCode from '../Hooks/useCode';

function Locations({ input }: { input: string }) {
  const { code } = useCode(input);

  return (
    <>
      {code?.places?.map((place) => {
        return <Box>{place['place name']}</Box>;
      })}
    </>
  );
}

export default Locations;
