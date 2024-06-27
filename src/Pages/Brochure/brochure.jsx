import React, { useEffect, useState } from "react";
import styles from './brochure.module.css';
import { brochureItems } from "../../Data/data";
import brochureBg1 from '../../Assets/brochure_bg_1.jpg';
import brochureBg2 from '../../Assets/brochure_bg_2.jpg';
import { Link } from "react-router-dom";
import { focusElement, leaveFocus, emailValiditionHandler, phoneNumberValidationHandler } from '../../Utilities/utilities';
import Modal from "../../Components/Modal/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Brochure = () => {

    const items = brochureItems.map((item, idx) => <option key={idx} className={styles.item}>{item}</option>);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [emailValiditaion, setEmailValidation] = useState(true);
    const [phone, setPhone] = useState('');
    const [phoneValidation, setPhoneValidation] = useState(true);
    const [town, setTown] = useState('');
    const [product, setProduct] = useState('');
    const [requestType, setRequstType] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [btnDisable, setBtnDisable] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => {
        emailValiditionHandler(email, setEmailValidation);
    }, [email])

    useEffect(() => {
        phoneNumberValidationHandler(phone, setPhoneValidation);
    }, [phone])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (name && address && email && emailValiditaion && phone && phoneValidation && product && requestType && agreement) {
                setBtnDisable(false);
            }
            else {
                setBtnDisable(true);
            }
        }, 1200)

        return () => {
            clearTimeout(timer);
        }

    }, [name, address, emailValiditaion, phoneValidation, product, requestType, agreement]);

    const statusHandler = () => {
        setStatus('');
        setModal(false);
        return window.location.assign('/');
    }

    const submitFormHandler = async (e) => {
        e.preventDefault();
        setSpinner(true);

        const data = {name, email, phone, address, product, requestType, agreement};

        if (requestType === 'download'){
            await fetch('https://new-era-glazing-solution-server.onrender.com/request-assets-download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(async res => res.blob()).then(data => {
                setSpinner(false);
                const zipURL = window.URL.createObjectURL(data);
                const tempLink = document.createElement('a');
                tempLink.href = zipURL;
                tempLink.setAttribute('download', 'brochure.zip');
                tempLink.click();
            })
            .catch(err => {
                console.log(err);
                setSpinner(false);
            });
        }
        else {
            await fetch('https://new-era-glazing-solution-server.onrender.com/request-assets-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                setSpinner(false);
                if (data.status === 'success'){
                    setModal(true);
                    setStatus('success');
                }
                else {
                    setModal(true);
                    setStatus('failed');
                }
            })
        }
    }

    let displayStatus;

    if (status){
        displayStatus = <div className={styles.statusContainer}>
            <h2 className={styles.statusHeading}>Your query has been submitted</h2>
            <p className={styles.statusP}>Your request will be processed immidiately</p>
            <button className={styles.statusBtn} onClick={() => window.location.assign('/')}>OK</button>
        </div>
    }
    else {
        displayStatus = <div className={styles.statusContainer}>
            <h2 className={styles.statusHeading}>Something went wrong</h2>
            <p className={styles.statusP}>Your request will be processed immidiately</p>
            <button className={styles.statusBtn} onClick={() => {
                setModal(false);
                setStatus('');
            }}>OK</button>
        </div>
    }


    return (
        <div className={styles.brochureContainer}>
            <Modal modal={modal}>
                {displayStatus}
            </Modal>
            <div className={styles.wrapper1}>
                <h1 className={styles.wrapperHeading1}>GET A FREE BROCHURE</h1>
                <p className={styles.wrapperP}>Discover the Express difference with one of our product brochures.</p>
            </div>
            <div className={styles.wrapper2}>
                <form className={styles.formContainer}>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(0, styles)}
                         onBlur={() => leaveFocus(0, styles)}
                         onChange={(e) => setName(e.target.value)}>
                        <span className={styles.label}>FULL NAME</span>
                        <input type="text" className={styles.input} placeholder="FULL NAME"/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(1, styles)}
                         onBlur={() => leaveFocus(1, styles)}>
                        <span className={styles.label}
                              style={emailValiditaion ? {color: 'black'} : {color:  'red'}}>
                            EMAIL ADDRESS
                        </span>
                        <input type="email" className={styles.input}
                               onChange={(e) => setEmail(e.target.value)}
                               style={emailValiditaion ? {color: 'black'} : {color:  'red'}}
                               placeholder="EMAIL ADDRESS"/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(2, styles)}
                         onBlur={() => leaveFocus(2, styles)}
                         onChange={(e) => setPhone(e.target.value)}>
                        <span className={styles.label}
                              style={phoneValidation ? {color: 'black'} : {color:  'red'}}>
                            PHONE NUMBER
                        </span>
                        <input type="number"
                               className={styles.input}
                               placeholder="PHONE NUMBER"
                               style={phoneValidation ? {color: 'black'} : {color:  'red'}}/>
                    </div>
                    <div className={styles.inputContainer}
                         onFocus={() => focusElement(3, styles)}
                         onBlur={() => leaveFocus(3, styles)}
                         onChange={(e) => setAddress(e.target.value)}>
                        <span className={styles.label}>JOB POSTCODE</span>
                        <input type="text" className={styles.input} placeholder="JOB POSTCODE"/>
                    </div>
                    {/* <div className={styles.inputContainer}
                         onFocus={() => focusElement(5, styles)}
                         onBlur={() => leaveFocus(5, styles)}
                         onChange={(e) => setTown(e.target.value)}>
                        <span className={styles.label}>TOWN / CITY</span>
                        <input type="text" className={styles.input} placeholder="TOWN / CITY"/>
                    </div> */}
                    <div className={styles.inputContainer}>
                        <span className={styles.label}>DESIRED PRODUCT</span>
                        <select className={styles.items} defaultValue="SELECT AN ITEM" onChange={(e) => setProduct(e.target.value)}>
                            <option disabled className={styles.item}>SELECT AN ITEM</option>
                            {items}
                        </select>
                    </div>
                    <div className={styles.radioContainer}>
                        <label className={styles.radioLabel}>REQUEST TYPE</label>
                        <div className={styles.radioInputContainer}>
                            <label className={styles.radioSelectLabel}>
                                <input type="radio" name="request-type" value="download" className={styles.radioBtn} onChange={(e) => setRequstType(e.target.value)}/>
                                <span className={styles.radioValue}>DOWNLOAD</span>
                            </label>
                            <label className={styles.radioSelectLabel}>
                                <input type="radio" name="request-type" value="by post" className={styles.radioBtn} onChange={(e) => setRequstType(e.target.value)}/>
                                <span className={styles.radioValue}>BY POST</span>
                            </label>
                            <label className={styles.radioSelectLabel}>
                                <input type="radio" name="request-type" value="by post" className={styles.radioBtn} onChange={(e) => setRequstType(e.target.value)}/>
                                <span className={styles.radioValue}>BY EMAIL</span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="checkbox" className={styles.checkbox}onChange={() => setAgreement(true)} />
                        <label htmlFor="checkbox" className={styles.checkboxLabel}>I'm happy to receive the Express newsletter, exclusive offers, and event invites.</label>
                    </div>
                    <div className={styles.btnContainer}>
                        <button disabled={btnDisable}
                                className={styles.submitBtn}
                                onClick={submitFormHandler}>{
                                    spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.spinner} />
                                    :
                                    'REQUEST'
                                }</button>
                    </div>
                </form>
                <div className={styles.headingContainer}>
                    <div className={styles.brochureBgContainer}>
                        <img src={brochureBg1} alt="new era brochure" className={styles.brochureBg1}/>
                        <img src={brochureBg2} alt="new era brochure" className={styles.brochureBg2}/>
                    </div>
                    <div className={styles.posterContianer}>
                        <div className={styles.poster}>
                            <h2 className={styles.potserHeading1}>UNEXPECTEDLY AFFORDABLE</h2>
                            <p className={styles.posterP}>Because all our products are manufactured in house we can make sure production costs are closely managed.</p>
                            <h3 className={styles.posterHeading3}>Bi-folding doors starting from £550 + VAT, per panel supply only</h3>
                            <Link to={''} className={styles.posterLink}>OUR PRODUCTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brochure;
