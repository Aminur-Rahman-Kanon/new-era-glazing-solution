import React, { useState, useEffect } from 'react';
import styles from './requestQuote.module.css';
import { items } from '../../Data/data';
import { focusElement, leaveFocus } from '../../Utilities/utilities';
import ContactFormContainer from '../../Components/ContactFormContainer/contactFormContainer';

const RequestQuote = () => {

    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValiditaion, setEmailValidation] = useState(true);
    const [address, setAddress] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);

    const item = items.map(itm => <option key={itm} className={styles.item}>{itm}</option>)
    return (
        <div className={styles.wrapper}>
            <div className={styles.topHeader}>
                <h2 className={styles.topHeaderHeading}>REQUEST A QUOTE</h2>
                <p className={styles.topHeaderP}>We only need a few details in order to give you an estimate, but feel free to give us specific information to receive a more detailed quote.</p>
            </div>
            <div className={styles.bottomHeader}>
                <ContactFormContainer border={true}/>
            </div>
        </div>
    )
}

export default RequestQuote;
