import { Box, Icon, Modal, ModalBody, chakra } from '@chakra-ui/react';

export const StyledModal = chakra(Modal, {
    baseStyle: {
        maxW: '31.25rem',
        padding: 6,
        borderRadius: 4,
        boxShadow: 'primary',
    },
});

export const StyledModalBody = chakra(ModalBody, {
    baseStyle: {
        p: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
    },
});

export const StyledModalCloseButton = chakra(Icon, {
    baseStyle: {
        color: 'brand.common.lightenBlack',
        cursor: 'pointer',
    },
});

export const StyledModalHeader = chakra(Box, {
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: '1.875rem',
    },
});
