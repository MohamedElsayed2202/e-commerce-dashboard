import React, { ReactNode, createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider, } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";

// type ThemeContextType = {
//     toggleColorMode: () => {}
// }
export const ThemeContext = createContext({ toggleColorMode: () => { } });


const ThemeContextProvider = (props: { children: ReactNode }) => {
    const isBrowserDefultDark = useMediaQuery('(prefers-color-scheme: dark)');
    const getDefultTheme = (): 'light' | 'dark' => {
        const localStorageTheme = localStorage.getItem('defult-theme') as 'light' | 'dark';
        console.log(localStorageTheme);

        const browserDefult = isBrowserDefultDark ? 'dark' : 'light';
        return localStorageTheme || browserDefult;
    };
    const [mode, setMode] = useState<'light' | 'dark'>(getDefultTheme())
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                const isCurrentDark = mode === "dark";
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
                localStorage.setItem('defult-theme', isCurrentDark ? 'light' : 'dark');
            }
        }),
        [mode]
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: mode,
                primary: {
                    main: '#0b9e61',
                },
                secondary: {
                    main: '#a62159',
                },
                ...(mode === 'light' ? {
                    error:{
                        main: '#d32f2f',
                        light: '#ef5350',
                        dark: '#c62828'
                    },
                    warning:{
                        main: '#ed6c02',
                        light: '#ff9800',
                        dark: '#e65100'
                    },
                    info:{
                        main: '#0288d1',
                        light: '#03a9f4',
                        dark: '#01579b'
                    },
                    success:{
                        main: '#2e7d32',
                        light: '#4caf50',
                        dark: '#1b5e20'
                    },
                    divider: 'rgba(0, 0, 0, 0.12)'
                }:{
                    error:{
                        main: '#f44336',
                        light: '#e57373',
                        dark: '#d32f2f'
                    },
                    warning:{
                        main: '#ffa726',
                        light: '#ffb74d',
                        dark: '#f57c00'
                    },
                    info:{
                        main: '#29b6f6',
                        light: '#4fc3f7',
                        dark: '#0288d1'
                    },
                    success:{
                        main: '#66bb6a',
                        light: '#81c784',
                        dark: '#388e3c'
                    },
                    divider: 'rgba(255, 255, 255, 0.12)'
                })
            },
            components: {
                MuiOutlinedInput: {
                    styleOverrides: {
                        input: {
                            "&:-webkit-autofill": {
                                WebkitBoxShadow: '0 0 0 100px transparent inset',
                                // WebkitTextFillColor: '#fff'
                            }
                        },
                    }
                },
            }
        }),
        [mode]
    )
    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
// export const useThemeContext = React.useContext(ThemeContext)
// export ThemeContext;

export default ThemeContextProvider