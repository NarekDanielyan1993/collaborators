import { Flex, Icon } from '@chakra-ui/react';
import EmailIcon from 'src/component/icons/emailIcon';
import PhoneIcon from 'src/component/icons/phoneIcon';
import {
    StyledUserCardDetail,
    StyledUserCardDetailIcon,
    StyledUserCardDetailText,
} from 'src/module/users/userCard/userCardDetails/style';
import { IUserCardDetails } from 'src/types/user';

const UserCardDetails = ({ email, phone }: IUserCardDetails) => {
    return (
        <Flex gap={3} flexDir="column">
            <StyledUserCardDetail>
                <StyledUserCardDetailIcon>
                    <Icon as={PhoneIcon} />
                </StyledUserCardDetailIcon>
                <StyledUserCardDetailText>{phone}</StyledUserCardDetailText>
            </StyledUserCardDetail>
            <StyledUserCardDetail>
                <StyledUserCardDetailIcon>
                    <Icon as={EmailIcon} />
                </StyledUserCardDetailIcon>
                <StyledUserCardDetailText>{email}</StyledUserCardDetailText>
            </StyledUserCardDetail>
        </Flex>
    );
};

export default UserCardDetails;
