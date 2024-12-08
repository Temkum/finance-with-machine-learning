import { Box, useMediaQuery } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h k"
  "g h k"
`;

const gridTemplateSmallerScreens = `
  "a"
  "a"
  "a"
  "a"
  "d"
  "d"
  "d"
  "g"
  "g"
  "g"
  "b"
  "b"
  "b"
  "b"
  "e"
  "e"
  "h"
  "h"
  "h"
  "h"
  "c"
  "c"
  "c"
  "f"
  "f"
  "f"
  "i"
  "i"
  "k"
  "k"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <Box
      width={'100%'}
      height={'100%'}
      gap={'1.5rem'}
      display={'grid'}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
              gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: '1fr',
              gridAutoRows: '80px',
              gridTemplateAreas: gridTemplateSmallerScreens,
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
