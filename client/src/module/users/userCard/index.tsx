import {
    StyledUserCard,
    StyledUserCardHeader,
} from 'src/module/users/userCard/style';
import UserCardDetails from 'src/module/users/userCard/userCardDetails';
import { IUserCard } from 'src/types/user';

const UserCard = ({ onClick, name, phone, email }: IUserCard) => {
    return (
        <StyledUserCard onClick={onClick}>
            <StyledUserCardHeader as="h2">{name}</StyledUserCardHeader>
            <UserCardDetails phone={phone} email={email} />
        </StyledUserCard>
    );
};

export default UserCard;
