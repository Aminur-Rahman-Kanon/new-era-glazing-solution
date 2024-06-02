import React, { useEffect } from 'react';
import styles from './ourProcess.module.css';
import img1 from '../../Assets/ourProcess/ourProcess_1.jpg';
import img2 from '../../Assets/ourProcess/ourProcess_2.jpg';
import img3 from '../../Assets/ourProcess/ourProcess_3.jpg';
import img4 from '../../Assets/ourProcess/ourProcess_4.jpg';
import img5 from '../../Assets/ourProcess/ourProcess_5.jpg';
import img6 from '../../Assets/ourProcess/ourProcess_6.jpg';
import img7 from '../../Assets/ourProcess/ourProcess_7.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos';

const OurProcess = () => {

    useEffect(() => {
        Aos.init({ duration: 1900, once:true });
    }, [])

    return (
        <div className={styles.ourProcessContainer}>
            <section className={styles.container1}>
                <div className={styles.topContainer}>
                    <h2 className={styles.topContainerHeading1}>OUR STEP BY-STEP PROCESS</h2>
                    <p className={styles.topContainerP}>It’s our goal to take care of all aspects of your order, from sales and survey to manufacturing, installation, and aftercare. By doing so, we can control the full bespoke order process and provide you with perfectly made products for your home.</p>
                    <p className={styles.topContainerP}>Detailed below is the typical order process you will benefit from if you choose Express Bi-Folding Doors for your upcoming project.</p>
                </div>
                <div className={styles.bottomContainer} id={styles.item1}>
                    <div className={styles.bottomBgContainer}>
                        <img src={img1} alt='new age' className={styles.bottomBg} />
                    </div>
                    <div data-aos="fade-left" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>A REFINED PROCESS</h2>
                        <p className={styles.bottomP}>We’ve used our years of manufacturing and installation experience to develop a simple step-by-step process, which can be implemented with each customer’s projects, with the aim of achieving the best results within the most efficient possible timeframe.</p>
                        <p className={styles.bottomP}>We’ll work with you through each important stage of the order process, ensuring you’re involved and informed along the entire way.</p>
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.bottomContainer} id={styles.item2}>
                    <div data-aos="fade-right" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>SEE IT FOR YOURSELF</h2>
                        <p className={styles.bottomP}>There’s no better way to see our windows, doors, and other glazing solutions than in person. That’s why we have a number of showrooms across the UK, including Leeds, Glasgow, Weybridge, and Romford.</p>
                        <p className={styles.bottomP}>Our knowledgeable staff are available to discuss your project, or feel free to just come and browse without any pressure.</p>
                        <div className={styles.container2LinkContainer}>
                            <Link to={''} className={styles.container2Link}>OUR SHOWROOMS</Link>
                            <span className={styles.linkSlider}></span>
                        </div>
                    </div>
                    <div className={styles.bottomBgContainer}>
                        <img src={img2} alt='new age' className={styles.bottomBg} />
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.bottomContainer} id={styles.item3}>
                    <div className={styles.bottomBgContainer}>
                        <img src={img3} alt='new age' className={styles.bottomBg} />
                    </div>
                    <div data-aos="fade-left" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>PRODUCTS, COLOURS AND FINISHES</h2>
                        <p className={styles.bottomP}>We have hundreds of colours to choose from across our range of products, making it easy for you to match your aluminium doors and windows to your worktops, furniture, or anything you like.</p>
                        <p className={styles.bottomP}>Pick from over 200 RAL colours or a vast array of finishes, including our exclusive elite and essence finishes, all of which are powder-coated to provide long-lasting durability against peeling and fading for at least 10 years.</p>
                        <div className={styles.container2LinkContainer}>
                            <Link to={''} className={styles.container2Link}>VIEW PRODUCTS</Link>
                            <span className={styles.linkSlider}></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.bottomContainer} id={styles.item4}>
                    <div data-aos="fade-right" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>SURVEY</h2>
                        <p className={styles.bottomP}>Before beginning any project, we always undertake an extensive full-site survey to ensure correct installation. This allows us to meet our customers in person and ensure that all aspects of the job run smoothly to guarantee a perfect finished project and maximum customer satisfaction.</p>
                        <p className={styles.bottomP}>We also always aim to ensure our bespoke products are tailored for you and your particular application or situation. All of the finer details of the works will be finalised with you, including discussions about an installation date which best-suits your development programme.</p>
                    </div>
                    <div className={styles.bottomBgContainer}>
                        <img src={img4} alt='new age' className={styles.bottomBg} />
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.topContainer}>
                    <h2 className={styles.topContainerHeading1}>SPECIFICATION SIGN OFF</h2>
                    <p className={styles.topContainerP}>Part of our company ethos is to complete all work as quickly as possible, whilst still ensuring it’s completed to the highest standard.</p>
                    <p className={styles.topContainerP}>Confirming the specifications of your order can be quite daunting, however, we go to great lengths to ensure this process is simple and easy, enabling you to sit back and enjoy the transformation of your property.</p>
                    <p className={styles.topContainerP}>If the survey is not signed off on-site, a member of our team will clarify all aspects of your job until you are completely happy for it to go into manufacture.</p>
                </div>
                <div className={styles.bottomContainer} id={styles.item5}>
                    <div className={styles.bottomBgContainer}>
                        <img src={img5} alt='new age' className={styles.bottomBg} />
                    </div>
                    <div data-aos="fade-left" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>PRODUCTION</h2>
                        <p className={styles.bottomP}>We take full responsibility for the quality of all our products, which we’re able to do thanks to the majority being manufactured in-house. Our UK production facility is expertly designed to flow seamlessly, and is fitted with the most advanced CNC machinery available.</p>
                        <p className={styles.bottomP}>The quality of our machinery and highly trained engineers enables us to produce a high volume of premium quality bespoke products every week, and in-house production also allows us to ensure each and every one of our products meets our high-quality demands and checks before it leaves the factory.</p>
                        <div className={styles.container2LinkContainer}>
                            <Link to={''} className={styles.container2Link}>THE TECHNOLOGY</Link>
                            <span className={styles.linkSlider}></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.bottomContainer} id={styles.item6}>
                    <div data-aos="fade-right" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>DELIVERY AND INSTALLATION</h2>
                        <p className={styles.bottomP}>We will aim to deliver and install your products at the earliest opportunity, whether this is on a supply-only basis or installed by our expert installation teams.</p>
                        <p className={styles.bottomP}>Our staff will arrive at a prearranged time that’s convenient for you. We don’t use haulage companies or sub-contractors, so you can be sure all products will arrive on-site in the same pristine condition that they were in when they left our factory.</p>
                    </div>
                    <div className={styles.bottomBgContainer}>
                        <img src={img6} alt='new age' className={styles.bottomBg} />
                    </div>
                </div>
            </section>
            <section className={styles.container1}>
                <div className={styles.bottomContainer} id={styles.item7}>
                    <div className={styles.bottomBgContainer}>
                        <img src={img7} alt='new age' className={styles.bottomBg} />
                    </div>
                    <div data-aos="fade-left" className={styles.bottomHeaderContainer}>
                        <h2 className={styles.bottomHeading1}>AFTER CARE</h2>
                        <p className={styles.bottomP}>We offer a comprehensive 10-year guarantee on all our products, and we boast a dedicated after-sales team to assist with even the slightest issue or concern about your installation.</p>
                        <p className={styles.bottomP}>Unlike other companies, we take full responsibility for our work by being with you every step of the way. Express is happy to be responsible for the survey, manufacture, and installation of your products, and is, therefore, more than happy to guarantee our work post-installation.</p>
                        <p className={styles.bottomP}>Our nationwide team of installers and service engineers enables us to respond to any after-sales issues, both at your convenience and within the quickest possible timeframes.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurProcess;
