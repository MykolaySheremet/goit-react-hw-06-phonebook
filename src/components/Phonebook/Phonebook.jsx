import React from "react";
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { addContact, deleteContact, setFilter } from '../../redux/actions';

import { Container, Title, ContactsTitle } from "./Phonebook.styled";
import { useEffect } from "react";





export const Phonebook = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    // const [contacts, setContacts] = useState(
    //         [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]);
    // const [filter, setFilter] = useState('');



    const dataHandleSubmit = data => {
    
        if (isDuplicate(data)) {

            if (isDuplicateName(data) && isDuplicateNumber(data)) {
                return Notiflix.Notify.failure(`Sorry but contact ${data.name} with number ${data.number} is added to your phonebook `)
            }

            if (isDuplicateName(data)) {
                return Notiflix.Notify.failure(`Sorry, but you has already added ${data.name} to your Phonebook, give a different name to this contact`);
            }

            if (isDuplicateNumber(data)) {
                return Notiflix.Notify.failure(`Sorry, but you has already added such ${data.number} to your Phonebook`);
            }

        }

        const newContact = {
            id: nanoid(),
            name: data.name,
            number: data.number
        }
            
        const action = addContact(newContact);
        dispatch(action);

        // setContacts(prevState => ([newContact, ...contacts])); 
    }
    
    
    const isDuplicate = ({ name, number }) => {
        
        const rezult = contacts.find(item => item.name.toLowerCase() === name.toLowerCase() || item.number.replace(/[^0-9]+/g, '') === number.replace(/[^0-9]+/g, ''));
        
      return rezult;       
    }

    const isDuplicateName = ({name}) => {
        const rezultCheckName = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
        
        return rezultCheckName;       
    }

    const isDuplicateNumber = ({number}) => {
        const rezultCheckNumber = contacts.find(item => item.number.replace(/[^0-9]+/g, '') === number.replace(/[^0-9]+/g, ''));

        return rezultCheckNumber;       
    }

    const changeFilter = e => {
        const { value } = e.target;
        dispatch(setFilter(value));
        // setFilter(value);
        
        // this.setState({ filter: e.currentTarget.value })
        
    }

    const deleteContacts = (idDeleteContacts) => {

        const action = deleteContact(idDeleteContacts);
        dispatch(action);
        

        // setContacts(contacts.filter((item) => item.id !== idDeleteContacts))
       
    }

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);


    const showFilteredContacts = () => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(item => item.name.toLowerCase().includes(normalizeFilter));
    }

    // console.log('результат визова showFilteredContacts МАСИВ ',showFilteredContacts())


        
 
    return (
            <Container>
                <Title>Phonebook</Title>
                <ContactForm dataSubmit={dataHandleSubmit}></ContactForm>
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter value={filter} onChange={changeFilter}></Filter>
                <ContactList
                    datacontacts={showFilteredContacts()}
                    deleteContacts={deleteContacts}
                ></ContactList>
            </Container>
        )

}

