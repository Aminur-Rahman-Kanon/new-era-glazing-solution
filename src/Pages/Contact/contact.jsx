import React, { useEffect } from 'react';
import styles from './contact.module.css';
import { focusElement, leaveFocus } from '../../Utilities/utilities';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Components/Modal/modal';

const Contact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [postCode, setPostCode] = useState('');
    const [details, setDetails] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [status, setStatus] = useState('');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (name && phone && email && details && postCode){
            setBtnDisable(false);
        }
        else {
            setBtnDisable(true);
        }
    }, [name, phone, email, details, postCode])

    const submitHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        const dataToSend = { name, phone, email, postCode, details };
        await fetch('https://new-era-glazing-solution-server-f28f.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }).then(res => res.json()).then(result => {
            if (result.status === 'success'){
                setSpinner(false);
                setStatus('success')
                setModal(true);
            }
            else {
                setSpinner(false);
                setStatus('failed')
                setModal(true);
            }
        }).catch(err => console.log(err))
    }

    let statusMsg;
    
    if (status === 'success'){
        statusMsg = <div className={styles.statusMsgContainer}>
            <h3>Query Submitted</h3>
            <span>We will contact you within 7 working days</span>
            <button className={styles.statusBtn} onClick={() => window.location.reload()}>Thank You!</button>
        </div>
    }
    else {
        statusMsg = <div className={styles.statusMsgContainer}>
            <h3>Something went wrong!</h3>
            <span>Please try again</span>
            <button className={styles.statusBtn} onClick={() => {
                setStatus('');
                setModal(false);
            }}>OK</button>
        </div>
    }

    return (
        <>
        <Modal modal={modal}>
            {statusMsg}
        </Modal>
        <div className={styles.contactContainer}>
            <div className={styles.contactHeading}>
                <div className={styles.headingItem}>
                    <h2 className={styles.headingItemH2}>CONTACT US</h2>
                    <h3 className={styles.headingMediumBlack}>new era glazing solution ltd</h3>
                    <span className={styles.textMediumBlack}><span className={styles.textMediumBold}>email:</span> info@neweraglazingsolutions.co.uk</span>
                    <span className={styles.textMediumBlack}><span className={styles.textMediumBold}>Address:</span> Unit 2, Midland House, 111-113 Victoria Road, London, Romford, RM1 2LX</span>
                </div>
                <div className={styles.headingItem}>
                    <h3 className={styles.headingItemH3}>CALL US</h3>
                    <a href='tel:+447875531847' className={styles.headingItemTel}>+44 7875 531847</a>
                    <p className={styles.headingItemTelP}>We are open Mon-Fri – 9am-5pm</p>
                </div>
            </div>
            <form className={styles.formWrapper}>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(0, styles)}
                     onBlur={() => leaveFocus(0, styles)}>
                    <span className={styles.label}>FULL NAME</span>
                    <input type='text'
                           className={styles.input}
                           placeholder='FULL NAME'
                           onChange={ (e) => setName(e.target.value) }/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(1, styles)}
                     onBlur={() => leaveFocus(1, styles)}>
                    <span className={styles.label}>EMAIL ADDRESS</span>
                    <input type='email'
                           className={styles.input}
                           placeholder='EMAIL ADDRESS'
                           onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(2, styles)}
                     onBlur={() => leaveFocus(2, styles)}>
                    <span className={styles.label}>PHONE NUMBER</span>
                    <input type='number'
                           className={styles.input}
                           placeholder='PHONE NUMBER'
                           onChange={ (e) => setPhone(e.target.value) }/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(3, styles)}
                     onBlur={() => leaveFocus(3, styles)}>
                    <span className={styles.label}>JOB POSTCODE</span>
                    <input type='text'
                           className={styles.input}
                           placeholder='JOB POSTCODE'
                           onChange={ (e) => setPostCode(e.target.value) }/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(4, styles)}
                     onBlur={() => leaveFocus(4, styles)} style={{height: 'auto'}}>
                    <span className={styles.label}>HOW CAN WE HELP?</span>
                    <textarea className={styles.input}
                              placeholder='HOW CAN WE HELP?'
                              rows={10}
                              onChange={ (e) => setDetails(e.target.value) }/>
                </div>
                <button disabled={btnDisable} className={styles.submitBtn} onClick={ submitHandler }>
                    {spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner} />
                    :
                    <span>
                        SUBMIT
                    </span>}
                </button>
            </form>
        </div>
        </>
    )
}

export default Contact;
