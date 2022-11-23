import { createTheme } from '@mui/material'

const themeColors = createTheme({
  
})

export const MuiTheme = createTheme({
  ...themeColors,
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontSize: 14,
  },

  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h1' },
          style: {
            fontSize: 20,
            fontWeight: 500,
            color: themeColors.palette.primary.main,
          },
        },
      ],
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontSize: 16,
        },
      },
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        disableElevation: true,
        fullWidth: true,
        size: 'small',
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {},
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: '0px !important',
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'info',
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: themeColors.palette.primary.main,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: 'white',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {},
      defaultProps: {
        SelectProps: {
          fullWidth: false,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
          padding: 16,
        },
        root: {},
      },
      defaultProps: {
        elevation: 0,
        sx:{
          width : '100%',
        }
      },
    },
  },
})
