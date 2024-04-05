import React from 'react';
import styles from './showrooms.module.css';
import sr1 from '../../Assets/showrooms/showrooms_1.jpg';
import sr2 from '../../Assets/showrooms/showrooms_2.jpg';
import sr3 from '../../Assets/showrooms/showrooms_3.jpg';
import sr4 from '../../Assets/showrooms/showrooms_4.jpg';

const Showrooms = () => {
    return (
        <div className={styles.showroomContainer}>
            <section className={styles.container1}>
                <h2 className={styles.container1Heading}>OUR SHOWROOMS</h2>
                <div className={styles.textContainer}>
                    <p className={styles.container1P}>There’s no better way to see our bespoke aluminium windows, premium front entrance doors, and other glazing solutions than in person at your nearest showroom.</p>
                    <p className={styles.container1P}>And to make sure our products are available to everyone, we have a number of locations set up across the UK, all of which are packed with our extensive range of bi-folding doors, sliding doors, glazed roofing systems, and more.</p>
                    <p className={styles.container1P}>We boast two London showrooms, which are arguably the most impressive and extensive of their kind in the whole of South East England. Located in Romford and Weybridge respectively, both are open six days a week and are a must-visit if you’re looking for premium, aluminium glazing products to transform your dream home.</p>
                    <p className={styles.container1P}>As for our Scotland showroom, it’s located just outside of Glasgow. Set over two floors in a stunningly modern space, it’s been specifically designed to get your inspiration flowing and get you excited about your project.</p>
                    <p className={styles.container1P}>And last, but not least, our flagship showroom in Leeds sits within the heart of our head office manufacturing site!</p>
                    <p className={styles.container1P}>Spanning a huge 27,000 square foot space and open seven days a week, our Leeds showroom contains several full house models and various full-sized room displays, allowing you to really explore all our products in a real-life setting and get a feeling for how they might work in your own home.</p>
                    <p className={styles.container1P}>No matter which showroom you choose to visit, our knowledgeable staff are always available to discuss your project’s needs. There’s also no need to make an appointment to visit any of our showrooms, so even if you’re still in the early stages of planning a project, feel free to come and browse without any pressure.</p>
                    <p className={styles.container1P}>Find out more about each of our showrooms below.</p>
                </div>
            </section>
            <section className={styles.container2}>
                <div className={styles.showroom}>
                    <div className={styles.showroomBgContainer}>
                        <img src={sr1} alt="showrrom" className={styles.showroomBg} />
                        <span className={styles.showroomHeading}>
                            LEEDS SHOWROOM
                        </span>
                    </div>
                </div>

                <div className={styles.showroom}>
                    <div className={styles.showroomBgContainer}>
                        <img src={sr2} alt="showrrom" className={styles.showroomBg} />
                        <span className={styles.showroomHeading}>
                            WEYBRIDGE SHOWROOM
                        </span>
                    </div>
                </div>

                <div className={styles.showroom}>
                    <div className={styles.showroomBgContainer}>
                        <img src={sr3} alt="showrrom" className={styles.showroomBg} />
                        <span className={styles.showroomHeading}>
                            ROMFORD SHOWROOM
                        </span>
                    </div>
                </div>

                <div className={styles.showroom}>
                    <div className={styles.showroomBgContainer}>
                        <img src={sr4} alt="showrrom" className={styles.showroomBg} />
                        <span className={styles.showroomHeading}>
                            GALSGOW SHOWROOM
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Showrooms;
