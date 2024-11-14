import React from 'react';
import NavLinkComponent from "@/components/nav-link/NavLinkComponent";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLinkComponent path={'/users'}>USERS</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/posts'}>POSTS</NavLinkComponent>
                </li>
                <li>
                    <NavLinkComponent path={'/comments'}>COMMENTS</NavLinkComponent>
                </li>
            </ul>

        </div>
    );
};

export default MenuComponent;