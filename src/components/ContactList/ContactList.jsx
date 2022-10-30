import { ItemContacts, ListContacts } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ datacontacts, deleteContacts }) => {
    // console.log('datacontacts',datacontacts);
    return (
        <ListContacts>
            {datacontacts.map(item => (
                <ItemContacts key={item.id}>
                    <p>{item.name} : {item.number}
                    </p>
                    <button
                        type="button"
                        onClick={()=>deleteContacts(item.id)}
                        >Delete</button>
                </ItemContacts>
            ))}
        </ListContacts>
    )
    
}

ContactList.propTypes = {
    datacontacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),

    deleteContacts: PropTypes.func.isRequired,
    
}