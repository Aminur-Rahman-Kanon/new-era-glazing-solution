import React, { useContext, useEffect } from 'react';
import styles from './sidedrawer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../ContextApi/contextApi';
import SidedrawerPortal from '../SidedrawerPortal/sidedrawerPortal';
import SocialLinkContainer from '../SocialLinkContainer/socialLinkContainer';
import { displayNestedItemHandler } from '../../Utilities/utilities';
import ProductSelector from '../ProductSelector/productSelector';
import Logo from '../Logo/logo';

const Sidedrawer = () => {

    const context = useContext(ContextApi);
    const sidedrawer = context.sidedrawer;
    const toggleSidedrawer = context.sidedrawerHandler;

    useEffect(() => {
        const el = document.querySelectorAll(`.${styles.itemContainer}`);
        const wrapper2 = document.querySelector(`.${styles.wrapper2}`);
        displayNestedItemHandler(el, wrapper2, styles);
    }, [])

    return (
        <SidedrawerPortal sidedrawer={sidedrawer}>
            <div className={styles.sidedrawerContainer}>
                <div className={styles.wrapper1}>
                    <div className={styles.productSelectorContainer}>
                        <ProductSelector />
                    </div>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.xBtnContainer}>
                        <FontAwesomeIcon icon={faX} className={styles.xBtn} onClick={toggleSidedrawer}/>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.wrapper2}>
                    <div className={styles.heading1Container}>
                        <div className={styles.headingItem}>
                            <a href='/showrooms' className={styles.heading} >
                                <div className={styles.headingImgContainer} id={styles.headingItem1}></div>
                                <span className={styles.headingText}>VISIT A SHOWROOM</span>
                            </a>
                        </div>
                        <div className={styles.headingItem}>
                            <a className={styles.heading} id={styles.headingItem2}>
                                <div className={styles.headingImgContainer} id={styles.headingItem2}></div>
                                <span className={styles.headingText}>THE DIFFERENCE</span>
                            </a>
                        </div>
                        <div className={styles.headingItem}>
                            <a className={styles.heading} id={styles.headingItem3}>
                                <div className={styles.headingImgContainer} id={styles.headingItem3}></div>
                                <span className={styles.headingText}>PRODUCT COLLECTION</span>
                            </a>
                        </div>
                    </div>
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
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>ALUMINIUM BI-FOLDING DOORS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>EXTERNAL SLIDING DOORS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>ALUMINIUM FRONT DOORS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>ALUMINIUM WINDOWSS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>ALUMINIUM FRENCH DOORS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>GLASS ROOF SYSTEMS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>BESPOKE GLASS SOLUTIONS</a>
                                    </li>
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
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>VIRTUAL SHOWROOMS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a className={styles.itemLink}>EXHIBITIONS & EVENTS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>FREQUENTLY ASKED QUESTION</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href='/contact' className={styles.itemLink}>CONTACT US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>THE DIFFERENCE</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>THE DIFFERENCE</h3>
                                <ul className={styles.items}>
                                    <li className={styles.item}>
                                        <a href='/our-process' className={styles.itemLink}>OUR PROCESS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href='/showrooms' className={styles.itemLink}>SHOWROOMS & EXHIBITIONS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a className={styles.itemLink}>OUR TECHNOLOGY</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>TESTIMONIAL & REVIEWS</a>
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
                                        <a href={''} className={styles.itemLink}>THE NEW ERA GLAZING SOLUTION TEAM</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>VIEW OUR COMPLETED PROJECTS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>ACCREDITATION</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.itemContainer}>
                            <h3 className={`${styles.itemHeading} ${styles.main}`}>NEWS & BLOG</h3>
                            <div className={styles.itemsContainer}>
                                <div className={styles.backBtnContainer}>
                                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backBtnIcon} />
                                    <span className={styles.backBtn}>BACK</span>
                                </div>
                                <h3 className={styles.itemHeading}>NEWS & BLOG</h3>
                                <ul className={styles.items}>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>EVENTS & EXHIBITIONS</a>
                                    </li>
                                    <li className={styles.item}>
                                        <a href={''} className={styles.itemLink}>LATEST NEWS</a>
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
                    <h2 className={styles.socialLinkHeading}>FOLLOW NEW ERA GLAZING SOLUTION</h2>
                    <SocialLinkContainer iconColor={'rgb(202, 202, 202)'}/>
                </div>
            </div>
        </SidedrawerPortal>
    )
}

export default Sidedrawer;
