import { Flex } from '@chakra-ui/react';
import Loader from 'src/component/loader';
import { useUserContext } from 'src/context/userContext';
import UserInfo from 'src/module/users/userInfo';

const UserList = () => {
    const { users, isUsersLoading, isPaginatedUsersLoading } = useUserContext();

    if (isUsersLoading || isPaginatedUsersLoading) return <Loader />;

    return (
        <Flex justifyContent="center" flexWrap="wrap" gap={6}>
            {Array.isArray(users) && users.length > 0
                ? users.map((user) => <UserInfo key={user.email} user={user} />)
                : null}
        </Flex>
    );
};

export default UserList;
