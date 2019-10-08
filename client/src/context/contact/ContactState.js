import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from "./contactContext";
import ContactReducer from './contact-reducer'

const ContactState = props => {
    const initialState = {
        contacts:
            [
                {
                    id: 2,
                    name: "Steve",
                    email: "steve@gmail.com",
                    phone: "111-111-1111",
                    type: "professional"
                },
                {
                    id: 2,
                    name: "Kate",
                    email: "kate@gmail.com",
                    phone: "333-333-3333",
                    type: "personal"
                },
                {
                    id: 3,
                    type: "personal",
                    name: "Melissa",
                    email: "melissa@gmail.com",
                    phone: "333-444-4444"
                }

            ]


    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact

    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;