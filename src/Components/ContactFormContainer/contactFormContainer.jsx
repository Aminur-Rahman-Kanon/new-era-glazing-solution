import React, { useState, useEffect } from "react";
import styles from './contactFormContainer.module.css';
import { items, colors } from "../../Data/data";
import { leaveFocus, focusElement, emailValiditionHandler, phoneNumberValidationHandler } from '../../Utilities/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/modal';

const ContactFormContainer = () => {

    const item = items.map(item => <option key={item} className={styles.option}>{item}</option>);
    const colour = colors.map(clr => <option key={clr} className={styles.option}>{clr}</option>);

    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValiditaion, setEmailValidation] = useState(true);
    const [address, setAddress] = useState('');
    const [color, setColor] = useState('');
    const [otherColor, setOtherColor] = useState('');
    const [details, setDetails] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [btnDisable, setBtnDisable] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [status, setStatus] = useState('');
    const [modal, setModal] = useState(false);

    
    useEffect(() => {
        emailValiditionHandler(email, setEmailValidation);
    }, [email])

    useEffect(() => {
        phoneNumberValidationHandler(number, setNumberValidation);
    }, [number])

    useEffect(() => {
        if (product && name && numberValidation && emailValiditaion && address && details ){
            setBtnDisable(false);
        }
        else {
            setBtnDisable(true);
        }
    }, [product, name, numberValidation, emailValiditaion, address, details]);

    const test = (e) => {
        e.preventDefault();
        const t = document.getElementById('attachment');
        t.click();
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);
        const formData = new FormData();

        const dataToLoad = {
            name, number, email, address, product
        }

        if (color !== 'others'){
            dataToLoad['color'] = color;
        }
        else {
            dataToLoad['color'] = otherColor;
        }

        if (attachment){
            formData.append('attachment', attachment);
            console.log(attachment);
        }


        formData.append('data', JSON.stringify(dataToLoad));

        await fetch('https://new-era-glazing-solution-server.onrender.com/contact-query', {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(result => {
            setSpinner(false);
            if (result.status === 'success'){
                setStatus('success');
                setModal(true);
            }
            else {
                setStatus('failed')
            }
        }).catch(err => {
            setSpinner(false);
            setStatus('failed');
        });
    }

    let displayStatus;
    if (status === 'success'){
        displayStatus = <div className={styles.statusContainer}>
            <h2 className={styles.statusH2}>Your query has been sent</h2>
            <p className={styles.statusP}>We will get back to you asap</p>
            <button className={styles.statusBtn} onClick={() => window.location.reload()}>Ok</button>
        </div>
    }
    else {
        displayStatus = <div className={styles.statusContainer}>
            <h2 className={styles.statusH2}>Something went wrong</h2>
            <p className={styles.statusP}>Please try again</p>
            <button className={styles.statusBtn} onClick={() => {
                setModal(false);
                setStatus('');
            }}>Ok</button>
        </div>
    }

    return (
        <>
        <Modal modal={modal}>
            {displayStatus}
        </Modal>
        <div className={styles.contactFormMain}>
            <form className={styles.contactForm} encType="multipart/form-data">
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
                            style={numberValidation ? {boxShadow: '0px 0px 15px 2px #d0e20d00'} : {boxShadow: '0px 0px 15px 2px #9d0e0e'}}
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
                <div className={styles.selectContainer}>
                    <select className={styles.select} defaultValue={"Select a product"} onChange={(e) => setProduct(e.target.value)}>
                        <option disabled>Select a product</option>
                        {item}
                    </select>
                </div>
                <div className={styles.selectContainer}>
                    <select className={styles.select} defaultValue={"Select a color"} onChange={(e) => setColor(e.target.value)}>
                        <option disabled>Select a color</option>
                        {colour}
                    </select>
                </div>
                <div className={styles.inputContainer} style={color === 'others' ? {display: 'block'} : {display: 'none'}}>
                    <span className={styles.label}>Color</span>
                    <input className={styles.input}
                            placeholder='Color'
                            onFocus={() => focusElement(4, styles)}
                            onBlur={() => leaveFocus(4, styles)}
                            onChange={(e) => setOtherColor(e.target.value)}/>
                </div>
                <div className={styles.inputContainer}>
                    <span className={styles.label}>Details about the project (max 500 words)</span>
                    <textarea className={styles.input}
                              rows={10}
                              maxLength={500}
                              placeholder="Details about the project (max 500 words)"
                              style={{height: 'auto'}}
                              onFocus={() => focusElement(5, styles)}
                              onBlur={() => leaveFocus(5, styles)}
                              onChange={(e) => setDetails(e.target.value)}/>
                </div>
                <div className={styles.attachmentContainer}>
                    <span onClick={(e) => test(e)} className={styles.attachmentBtn}>Upload File</span>
                    <span className={styles.attchmentLabel}>{
                        attachment ? `${attachment.name} has selected` : 'Attach any elevation or drawing'
                    }</span>
                    <input type="file"
                           name="attachment"
                           className={styles.input}
                           style={{display: 'none'}}
                           multiple={false}
                           id="attachment"
                           onChange={(e) => setAttachment(e.target.files[0])}/>
                </div>
                <button disabled={btnDisable} className={styles.submitBtn} onClick={submitFormHandler}>
                    {
                        spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner}/>
                        :
                        'Get A Price'
                    }
                </button>
                <p className={styles.info}>By providing your details you agree to being contacted under the terms of our privacy policy.</p>
            </form>
        </div>
        </>
    )
}

export default ContactFormContainer;
