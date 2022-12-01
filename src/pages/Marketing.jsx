import { Typography } from '@mui/material';
import CreateTaskCard from '../views/CreateTaskCard';

const Marketing = () => {
  return (
    <>
      <Typography marginBottom={2} variant='h5'>
        Marketing
      </Typography>
      <CreateTaskCard area='Marketing' />
    </>
  );
};

export default Marketing;
