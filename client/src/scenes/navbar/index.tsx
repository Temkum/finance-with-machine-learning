import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

import PixIcon from '@mui/icons-material/Pix';

type Props = {};

const Navbar = (props: Props) => {
  const { palette }: any = useTheme();

  const [selected, setSelected] = useState('dashboard');
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant="h4" fontWeight="bold" fontSize={'16px'}>
          Fin-ai
        </Typography>
        <FlexBetween borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
          <Typography variant="h5" color={palette.primary[100]}>
            Dashboard
          </Typography>
        </FlexBetween>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="1.25rem">
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            <Typography variant="h5" color={palette.primary[100]}>
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            <Typography variant="h5" color={palette.primary[100]}>
              Predictions
            </Typography>
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
    // <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     p={2}
    //     alignItems='center'
    // >
    //     <Typography
    //         variant="h4"
    //         fontWeight="bold"
    //         color={mode === 'light' ? 'black' : 'white'}
    //     >
    //         Finance
    //     </Typography>
    //     <Box
    //         display="flex"
    //         gap="20px"
    //     >
    //         <Link
    //             to="/"
    //             style={{ textDecoration: 'none' }}
    //         >
    //             <Typography
    //                 variant="h6"
    //                 color={mode === 'light' ? 'black' : 'white'}
    //             >
    //                 Home
    //             </Typography>
    //         </Link>
    //         <Link
    //             to="/predictions"
    //             style={{ textDecoration: 'none' }}
    //         >
    //             <Typography
    //                 variant="h6"
    //                 color={mode === 'light' ? 'black' : 'white'}
    //             >
    //                 Predictions
    //             </Typography>
    //         </Link>
    //     </Box>
    // </Box>
  );
};

export default Navbar;
