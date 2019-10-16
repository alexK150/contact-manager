import React, {useContext} from 'react';
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Contacts = (props) => {
    const contactContext = useContext(ContactContext);

    const {contacts, filtered} = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>
    }

    return (
        <>
            <TransitionGroup>
                {filtered !== null ? filtered.map(contact =>
                        (
                            //key property must to be moved to direct element
                            <CSSTransition
                                key={contact.id}
                                timeout={500}
                                className='item'
                            >
                                <ContactItem contact={contact}/>
                            </CSSTransition>
                        ))
                    : contacts.map(contact => (
                        <CSSTransition
                            key={contact.id}
                            timeout={500}
                            className='item'
                        >
                            <ContactItem contact={contact}/>
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </>
    )
}

export default Contacts;