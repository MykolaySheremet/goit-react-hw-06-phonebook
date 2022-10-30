import { NameField, InputValue } from "./Filter.styled"
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    
    return (
        <NameField>Find contacts by Name
            <InputValue
                type="text"
                value={value}
                onChange={onChange}
            >
            </InputValue>
        </NameField>
        
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}