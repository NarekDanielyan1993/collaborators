import { IUser } from 'src/types/user';
export interface IUserContext {
    users: IUser[];
    isUsersLoading: boolean;
    isPaginatedUsersLoading: boolean;
    getPaginatedUsers: (value: string) => void;
}
