import React, { useState, useEffect } from "react";
import styles from './contactFormContainer.module.css';
import { items } from "../../Data/data";
import { leaveFocus, focusElement, emailValiditionHandler, phoneNumberValidationHandler } from '../../Utilities/utilities';

const ContactFormContainer = () => {

    const item = items.map(item => <option key={item} className={styles.option}>{item}</option>);

    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValiditaion, setEmailValidation] = useState(true);
    const [address, setAddress] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);

    
    useEffect(() => {
        emailValiditionHandler(email, setEmailValidation);
    }, [email])

    useEffect(() => {
        phoneNumberValidationHandler(number, setNumberValidation);
    }, [number])

    useEffect(() => {
        if (product && name && numberValidation && emailValiditaion && address){
            setBtnDisable(false);
        }
        else {
            setBtnDisable(true);
        }
    }, [product, name, numberValidation, emailValiditaion, address]);

    return (
        <div className={styles.contactFormMain}>
            <h2 className={styles.formH2}>Get A Price</h2>
            <form className={styles.contactForm}>
                <div className={styles.selectContainer}>
                    <select className={styles.select} defaultValue={"Select a product"} onChange={(e) => setProduct(e.target.value)}>
                        <option disabled>Select a product</option>
                        {item}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Full Name</span>
                    <input className={styles.input}
                            placeholder='Full Name'
                            onFocus={() => focusElement(0, styles)}
                            onBlur={() => leaveFocus(0, styles)}
                            onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Contact Number</span>
                    <input className={styles.input}
                            type='number'
                            placeholder='Contact Number'
                            onFocus={() => focusElement(1, styles)}
                            onBlur={() => leaveFocus(1, styles)}
                            onChange={(e) => setNumber(e.target.value)}/>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Email Address</span>
                    <input className={styles.input}
                            placeholder='Email Address'
                            type='email'
                            onFocus={() => focusElement(2, styles)}
                            onBlur={() => leaveFocus(2, styles)}
                            onChange={(e) => setEmail(e.target.value)}
                            style={emailValiditaion ? {boxShadow: '0px 0px 15px 2px #d0e20d00'} : {boxShadow: '0px 0px 15px 2px #9d0e0e'}} />
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Full Address</span>
                    <input className={styles.input}
                            placeholder='Full Address'
                            onFocus={() => focusElement(3, styles)}
                            onBlur={() => leaveFocus(3, styles)}
                            onChange={(e) => setAddress(e.target.value)}/>
                </div>

                <button disabled={btnDisable} className={styles.submitBtn}>Get A Price</button>
                <p className={styles.info}>By providing your details you agree to being contacted under the terms of our privacy policy.</p>
            </form>
        </div>
    )
}

export default ContactFormContainer;
