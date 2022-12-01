import { Typography } from '@mui/material';
import CreateTaskCard from '../views/CreateTaskCard';

const Development = () => {
  return (
    <>
      <Typography marginBottom={2} variant='h5'>
        Development
      </Typography>
      <CreateTaskCard area='Development' />
    </>
  );
};

export default Development;
