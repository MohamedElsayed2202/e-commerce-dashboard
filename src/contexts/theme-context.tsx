import React, { ReactNode, createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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