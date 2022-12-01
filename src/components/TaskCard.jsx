import { Typography, Card, CardContent, Chip } from '@mui/material';

const TaskCard = (props) => {
  const {
    taskTitle,
    area,
    hours,
    deadline,
    taskDescription,
    person,
    team,
  } = props;

  return (
    <Card sx={{ minWidth: '250px', height: 'max-content' }}>
      <CardContent>
        <Typography marginBottom={1} variant='h6'>
          {taskTitle ? taskTitle : 'Task title'}
        </Typography>
        <Chip label={area} />
        <Typography marginBottom={1}></Typography>
        <Typography marginBottom={1}>
          {hours} {hours <= 1 ? 'hour' : 'hours'}
        </Typography>
        <Typography marginBottom={1}>
          {deadline ? deadline : 'Deadline'}
        </Typography>
        <Typography marginBottom={1}>
          {taskDescription ? taskDescription : 'Description'}
        </Typography>
        <Typography marginBottom={1}>{person ? person : 'Person'}</Typography>
        <Typography marginBottom={1}>Team {team}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
