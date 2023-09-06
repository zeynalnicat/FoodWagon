import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFBE34'
        },
        secondary: {
            main: '#091242',
            light: 'rgba(39, 50, 112,0.6)'
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& input': {
                        color: 'rgba(255,255,255,0.5)'
                    },
                    '& label': {
                        color: 'rgba(255,255,255,0.5)'
                    },
                    '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                    }
                }
            }
        },
        MuiAccordion: {
            defaultProps: {
                elevation: 0
            }
        }
    }
})

export default theme;
