import React from 'react'
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary">
           <h1> <ContactsRoundedIcon/> Contact Keeper </h1>

           <ul>
               <li>
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
               </li>
           </ul>
        </div>
    )
}

export default Navbar
