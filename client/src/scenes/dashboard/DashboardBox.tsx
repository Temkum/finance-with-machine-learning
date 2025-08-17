import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';

const DashboardBox = styled(Box)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.background.default,
  borderRadius: '1rem',
  boxShadow: '0.15rem 0.2rem 0.15rem 1rem rgba(0, 0, 0, 0.1)',
}));

export default DashboardBox;
