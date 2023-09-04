import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { Category, DashboardCustomize, PeopleAlt, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { memo, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleDrawer } from "../../store/slices/appbar-slice";


const navLinks = [
    {
        id: 1,
        icon: <DashboardCustomize />,
        title: "Dashboard",
        // path: "/dashboard"
        path: "/"
    },
    {
        id: 2,
        icon: <PeopleAlt />,
        title: "Users",
        path: "users"
    },
    {
        id: 3,
        icon: <DashboardCustomize />,
        title: "Brands",
        path: "brands"
    },
    {
        id: 4,
        icon: <Category />,
        title: "Categories",
        path: "categories"
    },
    {
        id: 5,
        icon: <ShoppingBag />,
        title: "Products",
        path: "products"
    },
    {
        id: 6,
        icon: <ShoppingCart />,
        title: "Orders",
        path: "orders"
    }
];

const NavDrawer = () => {
    const [selectedId, setSelectedId] = useState<number>(1);
    const location = useLocation();

    const appbar = useAppSelector(state => state.appbar);
    const dispatch = useAppDispatch();
    const handleDrawerToggle = useCallback(() => {
        if(appbar.mobileOpen)
            dispatch(toggleDrawer());
    },[dispatch, appbar.mobileOpen]);

    useEffect(()=>{
        let path = location.pathname.split('/')[1] 
        if(path === "") path = '/'
        setSelectedId((navLinks.findIndex(link => link.path === path)) + 1)
    }, [location])
    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.id} disablePadding >
                        <ListItemButton href={item.path} 
                        selected= {selectedId === item.id} 
                        onClick={handleDrawerToggle}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default memo(NavDrawer)