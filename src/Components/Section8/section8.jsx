 import React, { useEffect } from 'react';
 import styles from './section8.module.css';
 import section8Bg from '../../Assets/section8_bg.jpg';
 import Aos from 'aos';
import 'aos/dist/aos.css';

 
 const Section8 = () => {
    useEffect(() => {
        Aos.init({ duration: 1700, once: true });
    }, [])
    return (
        <div className={styles.section8Container}>
            <div className={styles.section8BgContainer}>
                <img src={section8Bg} alt="new era glazing solution ltd" className={styles.section8Bg} />
            </div>
            <div data-aos="fade-left" className={styles.section8HeadingContainer}>
                <h2 className={styles.section8Heading}>SEEING IS BELIEVING</h2>
                <p className={styles.section8P}>All our bespoke bifolds, patio doors, aluminium windows & bespoke glazed solutions are manufactured in our Head Office site alongside our flagship showroom in Leeds.</p>
                <p className={styles.section8P}>Our Glasgow showroom is also the most extensive of its kind in Scotland. A visit is also the perfect opportunity to talk to our friendly staff who can provide helpful tips and advice.</p>
                <p className={styles.section8P}>Our Leeds showroom is open seven days a week, while our Scotland showroom & two showrooms in London are open six days a week, you can see their address, opening times and other details here.</p>
            </div>
        </div>
    )
 }
 
 export default Section8;
 