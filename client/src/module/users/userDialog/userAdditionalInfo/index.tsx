import { Box } from '@chakra-ui/react';
import {
    StyledAdditionalInfoContent,
    StyledAdditionalInfoTitle,
} from 'src/module/users/userDialog/userAdditionalInfo/style';

const UserAdditionalInfo = () => {
    return (
        <Box>
            <StyledAdditionalInfoTitle>
                Дополнительная информация:
            </StyledAdditionalInfoTitle>
            <StyledAdditionalInfoContent>
                Разработчики используют текст в качестве заполнителя макта
                страницы. Разработчики используют текст в качестве заполнителя
                макта страницы.
            </StyledAdditionalInfoContent>
        </Box>
    );
};

export default UserAdditionalInfo;
