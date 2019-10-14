import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from "./contactContext";
import ContactReducer from './contact-reducer'
import {ADD_CONTACT, CLEAR_CURRENT, DELETE_CONTACT, SET_CURRENT} from "../types";

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
            ],
        current: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact});
    }
    //Delete Contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id});
    }
    //Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    }
    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    }
    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;