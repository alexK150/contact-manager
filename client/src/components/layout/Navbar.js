import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const {isAuthenticated, logout, user} = authContext;
    const {clearContacts} = contactContext;

    const onLogout = () => {
        logout();
        clearContacts();
    }

    const authLinks = (
        <>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"/><span className="hide-sm">Logout</span>
                </a>
            </li>
        </>
    )

    const guestLink = (
        <>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </>
    )

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon}/>{title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLink}
            </ul>
        </div>
    )
}

export default Navbar;