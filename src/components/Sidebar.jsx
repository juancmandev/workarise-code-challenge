import { useState } from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import {
  Aside,
  AsidePuller,
  CloseMenuIconContainer,
} from '../styles/styledComponents';

const Sidebar = () => {
  const [show, setShow] = useState('none');

  const styles = {
    listItem: {
      p: 0,
    },
    listItemButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  const handleShow = () => {
    show === 'none' ? setShow('block') : setShow('none');
    console.log(show);
  };

  return (
    <>
      <Aside show={show}>
        <CloseMenuIconContainer>
          <Tooltip title='Close menu'>
            <IconButton onClick={handleShow}>
              <MenuOpenIcon />
            </IconButton>
          </Tooltip>
        </CloseMenuIconContainer>
        <Stack sx={{ p: '0 16px', marginBottom: 8 }}>
          <NavLink to='/'>
            <Button
              variant='text'
              sx={{ textTransform: 'none', color: '#000' }}>
              <Typography variant='h6'>Workarise</Typography>
            </Button>
          </NavLink>
        </Stack>
        <List>
          <NavLink to='/development'>
            <ListItem sx={styles.listItem}>
              <ListItemButton sx={styles.listItemButton}>
                <CodeIcon />
                <Typography>Development</Typography>
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to='/design'>
            <ListItem sx={styles.listItem}>
              <ListItemButton sx={styles.listItemButton}>
                <PaletteIcon />
                <Typography>Design</Typography>
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to='/marketing'>
            <ListItem sx={styles.listItem}>
              <ListItemButton sx={styles.listItemButton}>
                <StorefrontIcon />
                <Typography>Marketing</Typography>
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Aside>
      <AsidePuller show={show} onClick={handleShow} />
    </>
  );
};

export default Sidebar;
