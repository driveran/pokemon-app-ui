import React, { createContext, useMemo, useState } from 'react';

import { createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material';
import ThemeProvider, { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

export enum Mode {
  Dark = 'dark',
  Light = 'light',
}

const themeMap: Record<Mode, ThemeOptions> = {
  [Mode.Dark]: darkTheme,
  [Mode.Light]: lightTheme,
};

type ThemeContextType = {
  mode: Mode;
  handleSetMode: (mode: Mode) => void;
};

const initialState: ThemeContextType = {
  mode: Mode.Light,
  handleSetMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<Mode>(initialState.mode);

  const theme = useMemo(() => createTheme(themeMap[mode]), [mode]);

  const handleSetMode = (newMode?: Mode): void => {
    if (!newMode) return;
    setMode(newMode);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ mode, handleSetMode }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default ThemeContextProvider;
