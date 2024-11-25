import { ThemeOptions } from '@mui/material';

import { sharedTheme } from './shared';

export const lightTheme: ThemeOptions = {
  ...sharedTheme,
  palette: {
    mode: 'light',
  },
};
