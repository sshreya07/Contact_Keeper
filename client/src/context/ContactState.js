import React , { useReducer } from 'react';
import {v4 as uuid} from 'uuid'   //just to generate random id coz we gonna work with some hard coded data before we deal with our backend data
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    SET_ALERT,
    SET_CURRENT,
    REMOVE_ALERT
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name:'john',
                email:'john@gmail.com',
                phone:'233-323-3232',
                type:'personal'
            },
            {
                id:2,
                name:'jim',
                email:'jim@gmail.com',
                phone:'122-323-3232',
                type:'personal'
            },
            {
                id:3,
                name:'alex',
                email:'alex@gmail.com',
                phone:'233-122-3232',
                type:'professional'
            },
            {
                id:4,
                name:'brad',
                email:'brad@gmail.com',
                phone:'233-323-1212',
                type:'professional'
            }
        ],

        current: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid();

        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    //Delete Contact
    const deleteContact = id => {

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

    //Set Current Contact
    const setCurrent = contact => {

        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }

    //Clear Current Contact
    const clearCurrent = () => {

        dispatch({
            type: CLEAR_CURRENT
        })
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