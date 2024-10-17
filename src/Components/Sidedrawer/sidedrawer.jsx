import React, { useContext, useEffect } from 'react';
import styles from './sidedrawer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../ContextApi/contextApi';
import SidedrawerPortal from '../SidedrawerPortal/sidedrawerPortal';
import SocialLinkContainer from '../SocialLinkContainer/socialLinkContainer';
import { displayNestedItemHandler } from '../../Utilities/utilities';
import { products } from '../../Data/data';
import Logo from '../Logo/logo';
import QuoteLink from '../QuoteLink/quoteLink';

const Sidedrawer = () => {

    const context = useContext(ContextApi);
    const sidedrawer = context.sidedrawer;
    const toggleSidedrawer = context.sidedrawerHandler;

    useEffect(() => {
        const el = document.querySelectorAll(`.${styles.itemContainer}`);
        const wrapper2 = document.querySelector(`.${styles.wrapper2}`);
        displayNestedItemHandler(el, wrapper2, styles);
    }, []);

    return (
        <SidedrawerPortal sidedrawer={sidedrawer}>
            <div className={styles.sidedrawerContainer}>
                <div className={styles.wrapper1}>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.xBtnContainer}>
                        <FontAwesomeIcon icon={faX} className={styles.xBtn} onClick={toggleSidedrawer}/>
                    </div>
                </div>
                <div className={styles.wrapper2}>
                    <div className={styles.heading2Container}>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>OUR PRODUCTS</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>OUR PRODUCTS</h3>
                                <ul className={styles.items}>
                                    {products &&  products.map(prd => <li key={prd.id} className={styles.item}>
                                        <a href={`/product/${prd.heading}`} className={styles.itemLink}>{prd.heading}</a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>CONTACT / VISIT</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>CONTACT / VISIT</h3>
                                <ul className={styles.items}>
                                    <li className={styles.item}>
                                        <a href='/request-quote' className={styles.itemLink}>GET A PRICE</a>
                                    </li>
                                    {/* <li className={styles.item}>
                                        <a href='/showrooms' className={styles.itemLink}>OUR SHOWROOMS</a>
                                    </li> */}
                                    <li className={styles.item}>
                                        <a href='/brochure' className={styles.itemLink}>DOWNLOAD FREE BROCHURE</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href='/contact' className={styles.itemLink}>CONTACT US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>THE COMPANY</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>THE COMPANY</h3>
                                <ul className={styles.items}>
                                    <li className={styles.item}>
                                        <a href='/about-us' className={styles.itemLink}>THE NEW ERA TEAM</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href='/our-process' className={styles.itemLink}>OUR PROCESS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>TRADE AND COMMERCIAL</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>TRADE AND COMMERCIAL</h3>
                                <ul className={styles.items}>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>INFO FOR INDUSTRY PROFESSIONALS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>WORK IN PARTNERSHIP WITH US</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a className={styles.itemLink}>COMPANIES WE RECOMMEND</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.socialLinkWrapper}>
                    <div className={styles.quoteLink}>
                        <QuoteLink />
                    </div>
                    <h2 className={styles.socialLinkHeading}>FOLLOW NEW ERA GLAZING SOLUTION</h2>
                    <SocialLinkContainer iconColor={'rgb(202, 202, 202)'}/>
                </div>
            </div>
        </SidedrawerPortal>
    )
}

export default Sidedrawer;
