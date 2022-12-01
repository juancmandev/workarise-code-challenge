import { useState } from 'react';
import { TextField, MenuItem, Typography } from '@mui/material';
import TaskCard from '../components/TaskCard';
import { CreateCardContainer, Form } from '../styles/styledComponents';

const CreateTaskCard = ({ area }) => {
  const persons = ['Juan', 'José', 'Ever'];
  const teams = ['A', 'B', 'C'];

  const [taskTitle, setTaskTile] = useState('');
  const [hours, setHours] = useState(1);
  const [deadline, setDeadline] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [person, setPerson] = useState('');
  const [team, setTeam] = useState('');

  const handleTaskTitle = (event) => {
    setTaskTile(event.target.value);
  };

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  const handleDeadline = (event) => {
    setDeadline(event.target.value);
  };

  const handleDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const handlePerson = (event) => {
    setPerson(event.target.value);
  };

  const handleTeam = (event) => {
    setTeam(event.target.value);
  };

  return (
    <CreateCardContainer>
      <Form>
        <TextField
          label='Task title'
          value={taskTitle}
          onChange={handleTaskTitle}
        />
        <TextField
          type='number'
          label='Time in hours'
          InputProps={{ inputProps: { min: 1 } }}
          value={hours}
          onChange={handleHours}
        />
        <section>
          <Typography variant='subtitle2'>Deadline</Typography>
          <TextField type='date' value={deadline} onChange={handleDeadline} />
        </section>
        <TextField
          multiline
          rows={4}
          label='Task description'
          value={taskDescription}
          onChange={handleDescription}
        />
        <TextField
          select
          label='Assign Person'
          value={person}
          onChange={handlePerson}>
          {persons.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField select label='Team' value={team} onChange={handleTeam}>
          {teams.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Form>
      <TaskCard
        taskTitle={taskTitle}
        area={area}
        hours={hours}
        deadline={deadline}
        taskDescription={taskDescription}
        person={person}
        team={team}
      />
    </CreateCardContainer>
  );
};

export default CreateTaskCard;
