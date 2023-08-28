import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { memo } from "react";

const DrawerToggle = ({ handleDrawerToggle, isOpen }:{handleDrawerToggle(): void, isOpen:boolean }) => {
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
    )
}

export default memo(DrawerToggle);