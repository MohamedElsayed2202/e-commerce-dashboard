import { Breadcrumbs, Link } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router";

const CustomeBreadcrumb = () => {
    const location = useLocation();
    const [links, setLinks] = useState<{path: string, name: string}[]>([]);
    useEffect(() => {
        const links = location.pathname.split("/").map((link, index) => {
            if (index === 0 && link === "") {
                return {path: '/', name: 'Shoes House'}
            }
            if (index === 1 && link === "") {
                return {path: '/', name: 'Dashboard'}
            }
            return {path: link, name: link.charAt(0).toUpperCase() + link.slice(1)};
        });
        setLinks(links);
    }, [location]);
    return (
        <Breadcrumbs aria-label="breadcrumb" 
        sx={{
            fontSize: { xs: '1rem', sm: '1.5rem' },
            p: 2
        }}
        >
            {links.map((link, index) => (
                <Link key={index} href={link.path}>
                    {link.name}
                </Link>
            ))}
        </Breadcrumbs>
    )
}

export default memo(CustomeBreadcrumb);