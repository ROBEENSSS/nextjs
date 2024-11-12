import React from 'react';
import {usersService} from "@/services/api.service";

type Params = {
    params: { id: string }
};

const UserPage = async ({params}: Params) => {
    const user = await usersService.getUserById(params.id);
    return (
        <div>
            <ul>
                <li>
                    {user?.id} : {user?.name}
                </li>
            </ul>
        </div>
    );
};

export default UserPage;