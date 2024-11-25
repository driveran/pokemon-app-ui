import React, { useContext } from 'react';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { Mode, ThemeContext } from './ThemeContextProvider';

const ThemeToggleSwitch = () => {
  const { mode, handleSetMode } = useContext(ThemeContext);

  const handleChange = (_: React.MouseEvent<HTMLElement>, value: Mode) => handleSetMode(value);

  return (
    <ToggleButtonGroup value={mode} exclusive onChange={handleChange} aria-label="text alignment">
      <ToggleButton value={Mode.Light} aria-label="theme light button">
        <LightModeIcon />
      </ToggleButton>
      <ToggleButton value={Mode.Dark} aria-label="theme dark button">
        <DarkModeIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggleSwitch;
