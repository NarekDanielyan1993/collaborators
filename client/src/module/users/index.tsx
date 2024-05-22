import { StyledUsersContainer } from 'src/module/users/style';
import UserList from 'src/module/users/userList';
import UsersSearch from 'src/module/users/usersSearch';

const Users = () => {
    return (
        <StyledUsersContainer>
            <UsersSearch />
            <UserList />
        </StyledUsersContainer>
    );
};

export default Users;
