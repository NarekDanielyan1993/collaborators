import {
    Icon,
    InputGroup,
    InputProps,
    InputRightElement,
} from '@chakra-ui/react';
import {
    StyledFormControl,
    StyledInput,
} from 'src/component/field/textField/style';
import SearchIcon from 'src/component/icons/searchIcon';

function SearchField({ onChange, value, name }: InputProps) {
    return (
        <StyledFormControl>
            <InputGroup>
                <StyledInput
                    name={name}
                    onChange={onChange}
                    type="text"
                    value={value}
                />
                <InputRightElement pr={6}>
                    <Icon as={SearchIcon} />
                </InputRightElement>
            </InputGroup>
        </StyledFormControl>
    );
}

export default SearchField;
