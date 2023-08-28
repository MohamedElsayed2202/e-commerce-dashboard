import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import { Category, DashboardCustomize, Inbox, Mail, PeopleAlt, ShoppingBag, ShoppingCart } from '@mui/icons-material';


const navLinks = [
    {
        id: 1,
        icon: <DashboardCustomize />,
        title: "Dashboard",
        path: "/dashboard"
    },
    {
        id: 2,
        icon: <PeopleAlt />,
        title: "Users",
        path: "/users"
    },
    {
        id: 3,
        icon: <DashboardCustomize />,
        title: "Brands",
        path: "/brands"
    },
    {
        id: 4,
        icon: <Category />,
        title: "Categories",
        path: "/categories"
    },
    {
        id: 5,
        icon: <ShoppingBag />,
        title: "Products",
        path: "/products"
    },
    {
        id: 6,
        icon: <ShoppingCart />,
        title: "Orders",
        path: "/orders"
    }
];




const NavDrawer = () => {
    const id = 1;
    return (
        <>
            <Toolbar />
            <Divider />
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.id} disablePadding >
                        <ListItemButton href={item.path} 
                        selected= {id === item.id} >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}> 
                                {/* <NavLink to={item.path}></NavLink> */}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default NavDrawer