import React from "react";
import styles from './aboutUs.module.css';
import section1 from '../../Assets/aboutUs/aboutUs_1.jpg';
import section2 from '../../Assets/aboutUs/aboutUs_2.jpg';
import section3 from '../../Assets/aboutUs/aboutUs_3.jpg';

const AboutUs = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.section1}>
                <div className={styles.imgContainer}>
                    <img src={section1} alt='new age glazing solution' className={styles.img}/>
                </div>
                <div className={styles.boxLight}>
                    <h2 className={styles.headingDark}>About US</h2>
                    <p className={styles.paraDark}>Introduction: We are a family run business, established in 2014. We are based in Romford and try to be within 100 miles radius. We waited well to gather enough experiences before we start our business.</p>
                    <p className={styles.paraDark}>We provide made to measure products. We believe we are well educated, experienced, expert to understand client’s need and fulfil their expectations. We offer all kinds of glazing.</p>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.boxDark}>
                    <h2 className={styles.headingGreen}>Why Choose Us</h2>
                    <ul className={styles.lists}>
                        <li className={styles.listLight}>We are highly qualified, educated and Experienced personals to offer you the glazing solutions.</li>
                        <li className={styles.listLight}>We try to work a bit differently than any other glazing company. We don’t like to over promise.</li>
                        <li className={styles.listLight}>We aim to be a quality-based company rather than a quantity based.</li>
                        <li className={styles.listLight}>Our experience and expertise are our investment.</li>
                        <li className={styles.listLight}>We have a variety of options to fulfil client needs maintaining the quality.</li>
                        <li className={styles.listLight}>We offer supply only as well as Supply+Install Service.</li>
                        <li className={styles.listLight}>We never walk away from any job until the client is completely happy.</li>
                        <li className={styles.listLight}>Experienced surveyor to do the survey and experienced fitters to fit with great care and without mistakes.</li>
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    <img src={section2} alt="new age glazing solution" className={styles.img} />
                </div>
            </div>
            <div className={styles.section3}>
                <div className={styles.imgContainer}>
                    <img src={section3} alt='new age glazing solution' className={styles.img}/>
                </div>
                <div className={styles.boxLight}>
                    <h2 className={styles.headingDark}>Options you will get</h2>
                    <ul className={styles.lists}>
                        <li className={styles.listDark}>With or without Integrated Magnetic Blinds</li>
                        <li className={styles.listDark}>With or without Crittal look. Deco Stick-on Bar on Doors. For Windows: Deco Stick-on Bar, Georgian Inside the glass Bar, Lead work</li>
                        <li className={styles.listDark}>Double and Triple Glazing</li>
                        <li className={styles.listDark}>With or without Solar or Laminated (Security) glass options</li>
                        <li className={styles.listDark}>Stocked Colours: RAL 7016 (Anthracite Grey Matt), RAL 9005 (Jet Black Matt), RAL 9016 (Traffic White Gloss) Or Wide Range of Non-Stocked Colour</li>
                        <li className={styles.listDark}>Quick possible turnaround time (Lead Time) without compromising the quality.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
