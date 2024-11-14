'use client'

import './NavLinkComponent.css'
import React, {FC, ReactNode} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

type NavProps = {
    path: string;
    children: ReactNode;
}

const NavLinkComponent:FC<NavProps> = ({path, children}) => {
    const pathname = usePathname();
    return (
        <div>
            <Link href={path} className={pathname === path ? 'class' : ''}>{children}</Link>
        </div>
    );
};

export default NavLinkComponent;