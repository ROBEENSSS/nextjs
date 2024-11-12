import React from 'react';
import {usersService} from "@/services/api.service";
import UserComponent from "@/components/UserComponent";

const UsersPage = async () => {
    const allUsers = await usersService.getAllUsers();

    return (
        <div>
            <ul>
                {allUsers.map(user => <li key={user.id}>
                    <UserComponent user={user}/>
                </li>)}
            </ul>
        </div>
    );
};

export default UsersPage;