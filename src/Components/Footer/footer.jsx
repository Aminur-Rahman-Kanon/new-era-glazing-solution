import React from "react";
import styles from './footer.module.css';
import logo1 from '../../Assets/logo2.png';
import logo2 from '../../Assets/made_in_britain.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import SocialLinkContainer from "../SocialLinkContainer/socialLinkContainer";

const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <hr className={styles.hr} />
            <div className={styles.logoContainer}>
                <img src={logo1} alt="new era glazing solution ltd" className={styles.logo} />
                <img src={logo2} alt="made in britain" className={styles.logo} />
            </div>
            <div className={styles.contactContainer}>
                <h3 className={styles.contactHeading1}>+4475 102 68021</h3>
                <p className={styles.text}>Lines are open Mon-Sat - 8:30am-5:00pm</p>
            </div>
            <div className={styles.socialLinkContainer}>
                <SocialLinkContainer iconColor={'gray'}/>
            </div>
            <div className={styles.headingContainer}>
                <Link to={''} className={styles.heading}>PRIVACY & COOKIES</Link>
                <Link to={''} className={styles.heading}>TERMS & CONDITION</Link>
            </div>
            <div className={styles.copyrightContainer}>
                <p className={styles.copyright}>&copy; New Era Glazing Solution LTD 2024</p>
                <p className={styles.copyright}>Site by Tall</p>
            </div>
        </div>
    )
}

export default Footer;
