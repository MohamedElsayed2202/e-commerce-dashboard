import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import { useThemeContext } from '../../contexts/theme-context';
import { memo } from 'react';


const DarkModeSwapper = () => {
    const { toggleColorMode } = useThemeContext();
    const theme = useTheme();
    return (
        <IconButton sx={{ mr: 2 }} onClick={toggleColorMode} color="inherit" aria-label="toggle between light and dark mode">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    )
};

export default memo(DarkModeSwapper);