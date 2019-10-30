import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/AuthContext';

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext);

    const {isAuthenticated, logout, user} = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
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