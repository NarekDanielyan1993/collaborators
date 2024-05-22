import { Box, Text, chakra } from '@chakra-ui/react';

export const StyledAdditionalInfoTitle = chakra(Box, {
    baseStyle: {
        marginBottom: 4,
        fontSize: 'lg',
        lineHeight: '1.5rem',
        color: 'brand.common.lightenBlack',
    },
});

export const StyledAdditionalInfoContent = chakra(Text, {
    baseStyle: {
        fontSize: 'md',
        lineHeight: '1.125rem',
        color: 'brand.secondary',
        mb: '2.5rem',
    },
});
