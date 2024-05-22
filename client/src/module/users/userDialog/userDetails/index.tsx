import {
    StyledModalDetails,
    StyledModalDetailsItem,
    StyledModalDetailsLeftSide,
    StyledModalDetailsRightSide,
} from 'src/module/users/userDialog/userDetails/style';
import { IUserDetails } from 'src/types/user';

const UserDetails = ({ user }: IUserDetails) => {
    return (
        <StyledModalDetails>
            <StyledModalDetailsItem>
                <StyledModalDetailsLeftSide>
                    Телефон:
                </StyledModalDetailsLeftSide>
                <StyledModalDetailsRightSide>
                    {user.phone}
                </StyledModalDetailsRightSide>
            </StyledModalDetailsItem>
            <StyledModalDetailsItem>
                <StyledModalDetailsLeftSide>Почта:</StyledModalDetailsLeftSide>
                <StyledModalDetailsRightSide>
                    {user.email}
                </StyledModalDetailsRightSide>
            </StyledModalDetailsItem>
            <StyledModalDetailsItem>
                <StyledModalDetailsLeftSide>
                    Дата приема:
                </StyledModalDetailsLeftSide>
                <StyledModalDetailsRightSide>
                    {user.hire_date}
                </StyledModalDetailsRightSide>
            </StyledModalDetailsItem>
            <StyledModalDetailsItem>
                <StyledModalDetailsLeftSide>
                    Должность:
                </StyledModalDetailsLeftSide>
                <StyledModalDetailsRightSide>
                    {user.position_name}
                </StyledModalDetailsRightSide>
            </StyledModalDetailsItem>
            <StyledModalDetailsItem>
                <StyledModalDetailsLeftSide>
                    Подразделение:
                </StyledModalDetailsLeftSide>
                <StyledModalDetailsRightSide>
                    {user.department}
                </StyledModalDetailsRightSide>
            </StyledModalDetailsItem>
        </StyledModalDetails>
    );
};

export default UserDetails;
