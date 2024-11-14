import React, {FC} from 'react';
import {usersService} from "@/services/api.service";

type Params = Promise<{ id: string }>
type SearchParams = Promise <{[key: string]: string | string[] | undefined}>

type MyProps = {
    params: Params;
    searchParams: SearchParams;
}


const UserPage: FC<MyProps> = async ({params, searchParams}) => {
    const {id} = await params;
    const {shlapa} = await searchParams;
    const user = await usersService.getUserById(id);
    return (
        <div>
            <ul>
                <li>
                    {user?.id} : {user?.name}
                    <hr/> {shlapa}
                </li>
            </ul>
        </div>
    );
};

export default UserPage;