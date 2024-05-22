import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { useGetPaginatedUsers, useGetUsers } from 'src/services/users';
import { IUserContext } from 'src/types/context';

const UserContext = createContext<IUserContext | undefined>(undefined);

function UserProvider({ children }: { children: React.ReactNode }) {
    const { users, setUsers, isLoading } = useGetUsers();
    const { fetchUsers, isLoading: isPaginatedUsersLoading } =
        useGetPaginatedUsers();

    const getPaginatedUsers = useCallback(async (value: string) => {
        const data = await fetchUsers(value);
        if (data) {
            setUsers(data);
        }
    }, []);

    const contextValue = useMemo(() => {
        return {
            users,
            isUsersLoading: isLoading,
            isPaginatedUsersLoading,
            getPaginatedUsers,
        };
    }, [users, isLoading, isPaginatedUsersLoading]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error(
            'useUserContext must be used within a UsersContextProvider'
        );
    }
    return context;
};

export { UserProvider, useUserContext };
export default UserContext;
