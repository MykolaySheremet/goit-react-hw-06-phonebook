import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

import { Form, NameFild, InputValue } from './ContactForm.styled';



export const ContactForm = ({dataSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
       
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                
                setName(value);
                break;
            case 'number':
               
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dataSubmit({ name, number });
        reset();
    }

     const reset = () => {
         setName('');
         setNumber('');
    }




    return (
            <Form onSubmit={handleSubmit}>
                
                <NameFild>
                    Name
                    <InputValue
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange ={handleChange}
                    />
                </NameFild>

                <NameFild>
                    Phone Number
                    <InputValue
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange ={handleChange}
                    />
                </NameFild>


                
                <button type="submit">Add contacts</button>

            </Form>
    )
        
}



// export class ContactForm extends React.Component{

//      state = {
//          name: '',
//          number: ''
//     }

//     handleChange = e => {
        
//         this.setState({
//             [e.currentTarget.name]: e.currentTarget.value
//             })
//     }

//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.dataSubmit(this.state);
//         this.reset();
//     }

//     reset = () => {
//         this.setState({name: '', number: ''})
//     }

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
                
//                 <NameFild>
//                     Name
//                     <InputValue
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={this.state.name}
//                         onChange ={this.handleChange }
//                     />
//                 </NameFild>

//                 <NameFild>
//                     Phone Number
//                     <InputValue
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         value={this.state.number}
//                         onChange ={this.handleChange}
//                     />
//                 </NameFild>


                
//                 <button type="submit">Add contacts</button>

//             </Form>
//         )
        
//     }

// }

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

