import React, {FC} from 'react';
import {IUser} from "../../models/user";
import Link from "next/link";

interface IProps {
    user: IUser
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link href={
                {
                    pathname: `/users/${user.id}`,
                    query: {shlapa: JSON.stringify(user)}
                }
            }>{user.id} : {user.name}</Link>
        </div>
    );
};

export default UserComponent;