import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@styles/GlobalStyle';
import * as theme from '@styles/theme';

const ReviewMeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ReviewMeProvider;
