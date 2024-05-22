import {
    IconButton,
    Modal,
    ModalContent,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import CloseIcon from 'src/component/icons/closeIcon';
import {
    StyledModalBody,
    StyledModalHeader,
} from 'src/module/users/userDialog/style';
import UserAdditionalInfo from 'src/module/users/userDialog/userAdditionalInfo';
import UserModalDetails from 'src/module/users/userDialog/userDetails';
import { IUserDialog } from 'src/types/user';

const UserDialog = ({ isOpen, onClose, userData }: IUserDialog) => {
    return (
        <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <StyledModalBody>
                    <StyledModalHeader>
                        <Text>{userData?.name}</Text>
                        <IconButton
                            aria-label=""
                            onClick={onClose}
                            icon={<CloseIcon />}
                        />
                    </StyledModalHeader>
                    <UserModalDetails user={userData} />
                    <UserAdditionalInfo />
                </StyledModalBody>
            </ModalContent>
        </Modal>
    );
};

export default UserDialog;
