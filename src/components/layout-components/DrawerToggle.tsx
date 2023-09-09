import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { toggleDrawer } from "../../store/slices/app/appbar-slice";

const DrawerToggle = () => {
    const appbar = useAppSelector(state => state.appbar);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = useCallback(() => {
        dispatch(toggleDrawer());
    },[dispatch]);
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            {appbar.mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
    )
}

export default memo(DrawerToggle);