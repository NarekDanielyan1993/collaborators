import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import SearchField from 'src/component/field/textField';
import { useUserContext } from 'src/context/userContext';
import { useDebounce } from 'src/hooks';

const UsersSearch = () => {
    const [value, setValue] = useState('');
    const { getPaginatedUsers } = useUserContext();

    const debouncedSubmit = useDebounce(getPaginatedUsers, 500);

    const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        debouncedSubmit(e.target.value);
    };

    return (
        <Box mb={6}>
            <SearchField onChange={onChangeSearchHandler} value={value} />
        </Box>
    );
};

export default UsersSearch;
