import { useState } from 'react';
import UserCard from 'src/module/users/userCard';
import UserDialog from 'src/module/users/userDialog';
import { IUser, IUserInfo } from 'src/types/user';

const UserInfo = ({ user }: IUserInfo) => {
    const [isDialogOpen, setIsDialogOpen] = useState<IUser | undefined>(
        undefined
    );
    return (
        <>
            <UserCard
                name={user.name}
                phone={user.phone}
                email={user.email}
                onClick={() => setIsDialogOpen(user)}
            />
            <UserDialog
                userData={user}
                isOpen={!!isDialogOpen}
                onClose={() => setIsDialogOpen(undefined)}
            />
        </>
    );
};

export default UserInfo;
