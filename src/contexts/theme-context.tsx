import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles"; 

// type ThemeContextType = {
//     toggleColorMode: () => {}
// }
const ThemeContext = createContext({toggleColorMode: () => {}});


const ThemeContextProvider = (props: {children: ReactNode}) => {
    const [mode, setMode] = useState<'light'|'dark'>('light')
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark': 'light'))
            }
        }),
        []
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode: mode
            }
        }),
        [mode]
    )
    return(
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>   
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
const useThemeContext = useContext(ThemeContext)
export default useThemeContext;