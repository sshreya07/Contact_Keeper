import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contactContext';
import { CLEAR_CURRENT } from '../../types';

const ContactForm = () => {

    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent } = contactContext;

    useEffect(() => {
        if(current !== null){
            setContact(current);
            
        }else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current]); {/* effect will mount update whenever value inside bracket get changed */}

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => {
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = e => {
        console.log('done');

        addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })

        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2 className='text-primary'> {current ? 'Edit Contact' : 'Add Contact'} </h2>
                <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
                <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
                <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />

                <h5>Contact Type</h5>
                    <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal{' '}
                    <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange}/> Professional{' '}
                

                <div>
                    <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block' />
                </div>

                {current && <div>
                    <button className='btn btn-light btn-block' onClick={() => clearCurrent()}>Clear</button></div>}

            </div>
        </form>
    )
}


export default ContactForm
