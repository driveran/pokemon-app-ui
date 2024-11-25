import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import ThemeToggleSwitch from '../ThemeContextProvider/ThemeToggleSwitch';

function NavBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexDirection: 'row-reverse' }}>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggleSwitch />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
