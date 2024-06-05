import { Components, Theme } from '@mui/material';

const rootElement = document.getElementById('root')!;

export const components: Components<Omit<Theme, "components">> = {

  MuiPopover: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiPopper: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiDialog: {
    defaultProps: {
      container: rootElement,
    },
  },
  MuiModal: {
    defaultProps: {
      container: rootElement,
    },
  },

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