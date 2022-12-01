import { Typography } from '@mui/material';
import CreateTaskCard from '../views/CreateTaskCard';

const Design = () => {
  return (
    <>
      <Typography marginBottom={2} variant='h5'>
        Design
      </Typography>
      <CreateTaskCard area='Design' />
    </>
  );
};

export default Design;
