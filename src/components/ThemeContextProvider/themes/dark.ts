import { ThemeOptions } from '@mui/material';

import { sharedTheme } from './shared';

export const darkTheme: ThemeOptions = {
  ...sharedTheme,
  palette: {
    mode: 'dark',
  },
};
