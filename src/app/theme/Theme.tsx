'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles'

const muiThemeConfig = {}

const theme = createTheme(muiThemeConfig as ThemeOptions)

interface ThemeProps {
  children: React.ReactNode
}

const AppTheme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default AppTheme