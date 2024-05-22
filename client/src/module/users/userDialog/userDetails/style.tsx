import { Box, Text, chakra } from '@chakra-ui/react';

export const StyledModalDetails = chakra(Box, {
    baseStyle: {
        display: 'flex',
        flexDir: 'column',
        gap: '1rem',
    },
});

export const StyledModalDetailsItem = chakra(Box, {
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
    },
});

export const StyledModalDetailsLeftSide = chakra(Text, {
    baseStyle: {
        flexBasis: '30%',
        flexShrink: 0,
        alignSelf: 'flexStart',
        color: 'brand.common.lightenBlack',
        fontSize: 'lg',
        lineHeight: '1.5rem',
    },
});

export const StyledModalDetailsRightSide = chakra(Text, {
    baseStyle: {
        color: 'brand.secondary',
        fontSize: 'md',
        lineHeight: '1.125rem',
    },
});
