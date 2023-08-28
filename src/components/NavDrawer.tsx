import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { Category, DashboardCustomize, PeopleAlt, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { memo, useCallback, useState } from "react";


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
    const handleListItemClick = useCallback((id: number) => {
        setSelectedId(id);
      },[setSelectedId]);
    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.id} disablePadding >
                        <ListItemButton href={item.path} 
                        selected= {selectedId === item.id} 
                        onClick={() => handleListItemClick(item.id)}
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