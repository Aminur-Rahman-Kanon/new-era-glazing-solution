import React, { useContext, useEffect } from 'react';
import styles from './sidedrawer.module.css';
import logo from '../../Assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
                        {/* <Link className={styles.logoContainer}>
                            <img src={logo} alt="new era glazing solution ltd" className={styles.logo} />
                        </Link> */}
                    </div>
                    <div className={styles.xBtnContainer}>
                        <FontAwesomeIcon icon={faX} className={styles.xBtn} onClick={toggleSidedrawer}/>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.wrapper2}>
                    <div className={styles.heading1Container}>
                        <div className={styles.headingItem}>
                            <Link className={styles.heading} >
                                <div className={styles.headingImgContainer} id={styles.headingItem1}></div>
                                <span className={styles.headingText}>VISIT A SHOWROOM</span>
                            </Link>
                        </div>
                        <div className={styles.headingItem}>
                            <Link className={styles.heading} id={styles.headingItem2}>
                                <div className={styles.headingImgContainer} id={styles.headingItem2}></div>
                                <span className={styles.headingText}>THE DIFFERENCE</span>
                            </Link>
                        </div>
                        <div className={styles.headingItem}>
                            <Link className={styles.heading} id={styles.headingItem3}>
                                <div className={styles.headingImgContainer} id={styles.headingItem3}></div>
                                <span className={styles.headingText}>PRODUCT COLLECTION</span>
                            </Link>
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
                                        <Link to={''} className={styles.itemLink}>ALUMINIUM BI-FOLDING DOORS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>EXTERNAL SLIDING DOORS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>ALUMINIUM FRONT DOORS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>ALUMINIUM WINDOWSS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>ALUMINIUM FRENCH DOORS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>GLASS ROOF SYSTEMS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>BESPOKE GLASS SOLUTIONS</Link>
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
                                        <Link to='/request-quote' className={styles.itemLink}>REQUEST A QUOTE</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>SHOWROOMS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>VIRTUAL SHOWROOMS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link className={styles.itemLink}>EXHIBITIONS & EVENTS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>FREQUENTLY ASKED QUESTION</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>CAREERS</Link>
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
                                        <Link to={''} className={styles.itemLink}>OUR PROCESS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>SHOWROOMS & EXHIBITIONS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link className={styles.itemLink}>OUR TECHNOLOGY</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>TESTIMONIAL & REVIEWS</Link>
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
                                        <Link to={''} className={styles.itemLink}>THE NEW ERA GLAZING SOLUTION TEAM</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>ACCREDITATION</Link>
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
                                        <Link to={''} className={styles.itemLink}>EVENTS & EXHIBITIONS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>LATEST NEWS</Link>
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
                                        <Link to={''} className={styles.itemLink}>INFO FOR INDUSTRY PROFESSIONALS</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link to={''} className={styles.itemLink}>WORK IN PARTNERSHIP WITH US</Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link className={styles.itemLink}>COMPANIES WE RECOMMEND</Link>
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
