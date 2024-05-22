import { Box, chakra } from '@chakra-ui/react';

export const StyledUserCard = chakra(Box, {
    baseStyle: {
        width: '22.325rem',
        minH: '19.625rem',
        padding: 6,
        borderRadius: '3xl',
        boxShadow: 'primary',
        cursor: 'pointer',
    },
});

export const StyledUserCardHeader = chakra(Box, {
    baseStyle: {
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: '1.875rem',
        marginBottom: 4,
    },
});
