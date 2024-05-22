import { Components, Theme } from '@mui/material';

export const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained'
    },
  },

  MuiGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: theme.transitions.create('all', { easing: theme.transitions.easing.easeInOut, duration: theme.transitions.duration.shorter })
      })
    }
  },

}