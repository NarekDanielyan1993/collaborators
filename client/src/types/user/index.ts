export interface IUser {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}

export interface IUserInfo {
    user: IUser;
}

export interface IUserCard {
    onClick: () => void;
    name: string;
    phone: string;
    email: string;
}

export interface IUserCardDetails {
    email: string;
    phone: string;
}

export interface IUserDetails {
    user: IUser;
}

export interface IUserDialog {
    userData: IUser;
    isOpen: boolean;
    onClose: () => void;
}
