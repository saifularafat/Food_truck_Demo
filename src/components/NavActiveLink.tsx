"use client"

// import Link from "next/link";
// import { usePathname } from "next/navigation";

import className from "@/utils/className";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavActiveLink = ({ children, href, exact = false, ...props }) => {
    const path = usePathname(); 
    const active = exact ? path === href : path.startsWith(href);
    const classes = className(props.className, active && activeClassName);
    if(classes){
        props.className = classes
    }

    return (
        <Link exact href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavActiveLink;