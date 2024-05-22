import { useCallback, useEffect, useState } from 'react';
import { USERS, USER_ERROR_MESSAGES } from 'src/constant';
import { useNotification } from 'src/hooks';
import { axiosInstance } from 'src/utills/apiRequest';

export const useGetUsers = () => {
    const { toast } = useNotification();

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const { data } = await axiosInstance.get(USERS.get);
                setUsers(data);
            } catch (error) {
                toast('error', USER_ERROR_MESSAGES.GET);
            }
            setIsLoading(false);
        };

        fetchUsers();
    }, []);

    return { users, isLoading, setUsers };
};

export const useGetPaginatedUsers = () => {
    const { toast } = useNotification();

    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = useCallback(async (value: string) => {
        setIsLoading(true);
        try {
            const { data } = await axiosInstance.get(USERS.get, {
                params: {
                    term: value,
                },
            });
            setIsLoading(false);
            return data;
        } catch (error) {
            setIsLoading(false);
            toast('error', USER_ERROR_MESSAGES.GET);
        }
    }, []);

    return { isLoading, fetchUsers };
};
